/**
 *    Motion Bank research, http://motionbank.org/
 *
 *    Write tool to inspect data on 3 tracks X, Y, Z.
 *
 *    Processing 2.0b
 *    changed: fjenett 20130307 
 */

 import processing.opengl.*;

 import de.bezier.guido.*;
 import org.piecemaker.api.*;
 
 MultiSlider mSlider;
 
 Track3D[] tracks;
 int trackStart = 0, trackEnd = 0;
 int trackPlayhead = 0;
 int longestTrackLength = -1;
 float[] trackMin, trackMax;
 color[] trackColors = new color[]{
     0xFF5082c8,
     0xFF82c850,
     0xFFc85082
 };
 
 int centerFold;
 
 PGraphics scene3D;
 InvisibleInteractiveArea scene3DController;
 ArcBall scene3DSpinner;
 float scene3DScale = 0;
 
 InvisibleInteractiveArea selectionController;
 
 int col1 = 0xFFF3F3F3;
 
 void setup ()
 {
    if ( window.appEmbedded ) {
        size( window.getSketchWidth(), window.getSketchHeight() );
    } else {
        size( 1200, 500 );
    }

     new App( this );
     
     Interactive.make(this);
     
     mSlider = new MultiSlider( 10, height-20, width-20, 10 );
     
     Interactive.setActive( mSlider, false );
     
     Interactive.on( mSlider, "leftValueChanged",  this, "leftChanged" );
     Interactive.on( mSlider, "rightValueChanged", this, "rightChanged" );
     
     centerFold = width/2;
     if ( window.appEmbedded ) {
        centerFold = 0;
     }
     
     scene3D = createGraphics( width - centerFold - 20, height-40, P3D );
     scene3DSpinner = new ArcBall( scene3D );
     
     scene3DController = new InvisibleInteractiveArea( centerFold, 10, width-centerFold-10, height-40 );
     Interactive.on( scene3DController, "clickedArea", scene3DSpinner, "mousePressed" );
     Interactive.on( scene3DController, "draggedArea", scene3DSpinner, "mouseDragged" );
     Interactive.on( scene3DController, "scrolledArea", this, "scaleScene3D" );
     
     selectionController = new InvisibleInteractiveArea( 20, 20, centerFold-40, height-50 );
     Interactive.on( selectionController, "draggedArea", this, "movePlayhead" );
 }
 
 void draw ()
 {
    background( 255 );
     
     if ( tracks == null || tracks.length <= 0 )
     {
         fill( 0 );
         textAlign( CENTER );
         text( "Loading", width/2, height/2 );
         textAlign( LEFT );
     }
     else
     {
         boolean isOutlier = false, wasOutlier = false;
         int warnColor = color(255, 80, 80);

         if ( centerFold > 0 ) 
         {
             fill( col1 );
             noStroke();
             
             float h = (height-40-20)/3;
             rect( 10, 10,       centerFold-20, h );
             rect( 10, 20+h,     centerFold-20, h );
             rect( 10, 30+h+h,   centerFold-20, h );
             
             fill( 200 );
             text( "X", 20, 30 );
             text( "Y", 20, 30 + h + 10 );
             text( "Z", 20, 30 + 2*h + 20 );
             
             noFill();
             stroke( 255 );

             for ( Track3D t : tracks )
             {
                 if ( trackPlayhead >= t.trackData.length ) continue;
                 
                 int iStep = 1;
                 isOutlier = false;
                 wasOutlier = false;
                 
                 if ( (trackEnd - trackStart) > centerFold-40 )
                 {
                     iStep = int( round( (trackEnd - trackStart) / (centerFold-40) ) );
                 }
                 
                 for ( int d = 0; d < 3; d++ )
                 {
                     float vx = 20 + map( trackPlayhead, trackStart, trackEnd, 0, centerFold-40 );
                     float vy = 0;
                     
                     stroke( 220 );
                     strokeWeight( 1 );
                     line( vx, 20 + (d*h) + (d*10), vx, (d*h) + (d*10) + h );
                     
                     beginShape();
                     stroke( t.trackColor );
                     for ( int i = trackStart; i < trackEnd && i < t.trackData.length; i+=iStep )
                     {
                         vx = 20 + map( i, trackStart, trackEnd, 0, centerFold-40 );
                         vy = 20 + (d*h) + (d*10) + map( t.trackData[i][d], trackMin[d], trackMax[d], h-20, 0 );
                         
                         isOutlier = t.trackSpeed[i] > t.trackSpeedThresh;
                         
                         if ( isOutlier != wasOutlier ) {
                             vertex( vx, vy );
                             endShape();
                             stroke( isOutlier ? warnColor : t.trackColor );
                             strokeWeight( isOutlier ? 2 : 1 );
                             beginShape();
                             wasOutlier = isOutlier;
                         }
                         
                         vertex( vx, vy );
                     }
                     endShape();
                 }
             }
         }

         scene3D.beginDraw();
         scene3D.background( col1 );
         scene3D.pushMatrix();
         scene3DSpinner.apply();
         
         float vx = 0, vy = 0, vz = 0;
         float s = scene3D.width / 12.0 + scene3DScale;
         
//             vx = t.trackData[trackPlayhead][0] - 6; 
//             vy = -t.trackData[trackPlayhead][1] + 6;
//             vz = t.trackData[trackPlayhead][2];
         scene3D.translate( scene3D.width/2 - vx*s, scene3D.height/2 - vy*s, -scene3D.height/2 - vz*s );
         
         scene3D.scale( s );
         
         scene3D.pushMatrix();
         scene3D.stroke( 0 );
         scene3D.strokeWeight( 1 );
         scene3D.translate( vx, vy, vz );
         scene3D.beginShape();
         scene3D.vertex( 0, 0, 0 );
         scene3D.vertex( 0.2, 0, 0 );
         scene3D.endShape();
         scene3D.beginShape();
         scene3D.vertex( 0, 0, 0 );
         scene3D.vertex( 0, 0.2, 0 );
         scene3D.endShape();
         scene3D.beginShape();
         scene3D.vertex( 0, 0, 0 );
         scene3D.vertex( 0, 0, 0.2 );
         scene3D.endShape();
         scene3D.popMatrix();

         scene3D.stroke( 190 );
         scene3D.strokeWeight( 1 );
         scene3D.fill( 235 );
         scene3D.beginShape();
         scene3D.vertex( -6, -6, 0 );
         scene3D.vertex( -6, 6, 0 );
         scene3D.vertex( 6, 6, 0 );
         scene3D.vertex( 6, -6, 0 );
         scene3D.endShape( CLOSE );
         scene3D.fill( 190 );
         scene3D.noStroke();
         scene3D.rect( -6.05, 5.95, 0.1, 0.1 );
    
         for ( Track3D t : tracks )
         {
             if ( trackPlayhead >= t.trackData.length ) continue;
             
             isOutlier = false;
             wasOutlier = false;
             
             scene3D.noFill();
             scene3D.beginShape();
             isOutlier = false;
             wasOutlier = false;
             scene3D.stroke( t.trackColor );
             for ( int i = trackStart; i < trackEnd && i < t.trackData.length; i++ )
             {
                 vx = t.trackData[i][0] - 6; 
                 vy = -t.trackData[i][1] + 6;
                 vz = t.trackData[i][2];
                 isOutlier = t.trackSpeed[i] > t.trackSpeedThresh;
                 if ( isOutlier != wasOutlier ) {
                     scene3D.vertex( vx, vy, vz );
                     scene3D.endShape();
                     scene3D.stroke( isOutlier ? warnColor : t.trackColor );
                     scene3D.strokeWeight( isOutlier ? 2 : 1 );
                     scene3D.beginShape();
                     wasOutlier = isOutlier;
                 }
                 scene3D.vertex( vx, vy, vz );
             }
             scene3D.endShape();
         }
             
         scene3D.popMatrix();
         scene3D.endDraw();
         image( scene3D, centerFold+10, 10 );
     }
 }
 
 void setData ( float[][] d )
 {
     Track3D t = new Track3D();
     
     t.trackData = d;
     t.trackSpeedMean = 0;
     t.trackSpeedHigh = -10000;
     t.trackSpeedLow = 10000;
     t.trackSpeed = new float[t.trackData.length];
     if ( trackMin == null )
         trackMin = new float[]{ 10000, 10000, 10000};
     if ( trackMax == null )
         trackMax = new float[]{-10000,-10000,-10000};
     for ( int i = 0, k = t.trackData.length-1; i < k; i++ ) 
     {
         trackMin[0] = min(trackMin[0], t.trackData[i][0]);
         trackMax[0] = max(trackMax[0], t.trackData[i][0]);
         trackMin[1] = min(trackMin[1], t.trackData[i][1]);
         trackMax[1] = max(trackMax[1], t.trackData[i][1]);
         trackMin[2] = min(trackMin[2], t.trackData[i][2]);
         trackMax[2] = max(trackMax[2], t.trackData[i][2]);
     
         t.trackSpeed[i] = dist( t.trackData[i][0],   t.trackData[i][1],   t.trackData[i][2],
                               t.trackData[i+1][0], t.trackData[i+1][1], t.trackData[i+1][2] );
            
         t.trackSpeedMean += t.trackSpeed[i];
         t.trackSpeedHigh = max( t.trackSpeedHigh, t.trackSpeed[i] );
         t.trackSpeedLow = min( t.trackSpeedLow,  t.trackSpeed[i] );
     }
     t.trackSpeedMean = t.trackSpeedMean / t.trackData.length;
     t.trackSpeedThresh = 6 * t.trackSpeedMean;
     
     //console.log( trackSpeedLow, trackSpeedMean, trackSpeedHigh );
     
     if ( tracks == null ) tracks = new Track3D[0];
     tracks = (Track3D[])append( tracks, t );
     
     tracks[tracks.length-1].trackColor = trackColors[tracks.length-1 % trackColors.length];
     
     longestTrackLength = (int)max(longestTrackLength,t.trackData.length);
     
     Interactive.setActive( mSlider, true );
     mSlider.set(0,0.1);
 }
 
 void scaleScene3D ( float v )
 {
    scene3DScale += v;
    //if ( scene3DScale < 0 ) scene3DScale = 0;
 }
 
 void leftChanged ( float v )
 {
     trackStart = int(( map( v, 0, 1, 0, longestTrackLength ) ) / 2) * 2;
 }
 
 void rightChanged ( float v )
 {
     trackEnd = int(( map( v, 0, 1, 0, longestTrackLength ) ) / 2) * 2;
 }
 
 void movePlayhead ( float v, float vv )
 {
     v = constrain( v, 0, centerFold-40 );
     trackPlayhead = int( map( v, 0, centerFold-40, trackStart, trackEnd ) / 2 ) * 2;
 }

 public void mouseWheelMoved ( java.awt.event.MouseWheelEvent e ) 
 {
     Interactive.get().mouseWheelMoved(e);
 }
/*
 Replaced Vec3 with internal PVector. Added rotateAround() to 
 handle missing rotate(a,v0,v1,v2) in Processing.js 1.4.1 ...
 and made it work on PGraphics instead of PApplet to be more
 modular.
 fjenett - 2012-11
 
 Adapted into Processing library 5th Feb 2006 Tom Carden
 from "simple arcball use template" 9.16.03 Simon Greenwold
 
 Copyright (c) 2003 Simon Greenwold
 Copyright (c) 2006 Tom Carden
 
 This library is free software; you can redistribute it and/or
 modify it under the terms of the GNU Lesser General Public
 License as published by the Free Software Foundation; either
 version 2.1 of the License, or (at your option) any later version.
 
 This library is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 Lesser General Public License for more details.
 
 You should have received a copy of the GNU Lesser General
 Public License along with this library; if not, write to the
 Free Software Foundation, Inc., 59 Temple Place, Suite 330,
 Boston, MA  02111-1307  USA
 */

public class ArcBall 
{
    PGraphics graphics;

    float center_x, center_y, center_z, radius;
    PVector v_down, v_drag;
    Quat q_now, q_down, q_drag;
    PVector[] axisSet;
    int axis;

    /** defaults to radius of min(width/2,height/2) and center_z of -radius */
    public ArcBall( PApplet parent ) 
    {
        this( parent.g );
    }
    
    /** defaults to radius of min(width/2,height/2) and center_z of -radius */
    public ArcBall( PGraphics g ) 
    {
        this( g.width/2.0f, g.height/2.0f, -min( g.width/2.0f, g.height/2.0f ), min( g.width/2.0f, g.height/2.0f ), g );
    }

    public ArcBall( float center_x, float center_y, float center_z, float radius, PGraphics g ) 
    {
        graphics = g;

        this.center_x = center_x;
        this.center_y = center_y;
        this.center_z = center_z;
        this.radius = radius;

        v_down = new PVector();
        v_drag = new PVector();

        q_now = new Quat();
        q_down = new Quat();
        q_drag = new Quat();

        axisSet = new PVector[] { 
            new PVector(1.0f, 0.0f, 0.0f), 
            new PVector(0.0f, 1.0f, 0.0f), 
            new PVector(0.0f, 0.0f, 1.0f)
        };
        axis = -1;  // no constraints...
        
        // this is a hack to initialize it with something .. we can do better
        mousePressed( center_x, center_y );
        mouseDragged( center_x-0.0001, center_y-0.0001 );
    }

    public void mousePressed ( float mx, float my ) 
    {
        v_down = mouse_to_sphere( mx, my );
        q_down.set(q_now);
        q_drag.reset();
    }

    public void mouseDragged ( float mx, float my )
    {
        v_drag = mouse_to_sphere( mx, my );
        q_drag.set( v_down.dot(v_drag), v_down.cross(v_drag) );
    }

    public void apply ()
    {
        graphics.translate(center_x, center_y, center_z);
        q_now = q_drag.mul(q_down);
        applyQuat2Matrix(q_now);
        graphics.translate(-center_x, -center_y, -center_z);
    }

    PVector mouse_to_sphere ( float x, float y ) 
    {
        PVector v = new PVector();
        v.x = (x - center_x) / radius;
        v.y = (y - center_y) / radius;

        float m = v.x * v.x + v.y * v.y;
        if (m > 1.0f) 
        {
            v.normalize();
        }
        else 
        {
            v.z = sqrt(1.0f - m);
        }

        return (axis == -1) ? v : constrain_vector(v, axisSet[axis]);
    }

    PVector constrain_vector(PVector vector, PVector axis) 
    {
        PVector res = new PVector();
        axis.mult(axis.dot(vector));
        res.sub(vector, axis);
        res.normalize();
        return res;
    }

    void applyQuat2Matrix(Quat q) 
    {
        // instead of transforming q into a matrix and applying it...

        float[] aa = q.getValue();
        rotateAround( aa[0], aa[1], aa[2], aa[3] );
    }
    
    void rotateAround ( float angle, float v0, float v1, float v2 )
    {
        float norm2 = v0 * v0 + v1 * v1 + v2 * v2;
        
        if (Math.abs(norm2 - 1) > EPSILON) {
            float norm = sqrt(norm2);
            v0 /= norm;
            v1 /= norm;
            v2 /= norm;
        }
    
        float c = cos(angle);
        float s = sin(angle);
        float t = 1.0f - c;
        float[] m = new float[9];
        m[0] = (t*v0*v0) + c;          // 0, 0
        m[1] = (t*v0*v1) - (s*v2);     // 0, 1
        m[2] = (t*v0*v2) + (s*v1);     // 0, 2
        
        m[3] = (t*v0*v1) + (s*v2);     // 1, 0
        m[4] = (t*v1*v1) + c;          // 1, 1
        m[5] = (t*v1*v2) - (s*v0);     // 1, 2
        
        m[6] = (t*v0*v2) - (s*v1);     // 2, 0
        m[7] = (t*v1*v2) + (s*v0);     // 2, 1
        m[8] = (t*v2*v2) + c;          // 2, 2
    
        graphics.applyMatrix( m[0], m[1], m[2], 0, m[3], m[4], m[5], 0, m[6], m[7], m[8], 0, 0, 0, 0, 1 );
    }
}

class Quat 
{
    float w, x, y, z;

    Quat() {
        reset();
    }

    Quat(float w, float x, float y, float z) 
    {
        this.w = w;
        this.x = x;
        this.y = y;
        this.z = z;
    }

    void reset() 
    {
        w = 1.0f;
        x = 0.0f;
        y = 0.0f;
        z = 0.0f;
    }

    void set ( float w, PVector v ) 
    {
        this.w = w;
        x = v.x;
        y = v.y;
        z = v.z;
    }

    void set( Quat q) 
    {
        w = q.w;
        x = q.x;
        y = q.y;
        z = q.z;
    }

    Quat mul ( Quat q2 ) 
    {
        Quat res = new Quat();
        res.w = w * q2.w - x * q2.x - y * q2.y - z * q2.z;
        res.x = w * q2.x + x * q2.w + y * q2.z - z * q2.y;
        res.y = w * q2.y + y * q2.w + z * q2.x - x * q2.z;
        res.z = w * q2.z + z * q2.w + x * q2.y - y * q2.x;
        return res;
    }

    float[] getValue() 
    {
        // transforming this quat into an angle and an axis vector...

        float[] res = new float[4];

        float sa = (float) Math.sqrt(1.0f - w * w);
        if (sa < EPSILON) {
            sa = 1.0f;
        }

        res[0] = (float) Math.acos(w) * 2.0f;
        res[1] = x / sa;
        res[2] = y / sa;
        res[3] = z / sa;

        return res;
    }
} // Quat

class Track3D
{
    color trackColor;
    
    float[][] trackData;
    float[] trackSpeed;
     
    float trackSpeedMean, trackSpeedHigh, trackSpeedLow, trackSpeedThresh;
    
    // fix [0,0,0] points by interpolating between last and next known point
    
    float[][] fixZeroPoints ( float[][] points )
    {
        // trying to remove any 0,0,0 points by linear interpolation
        
        float[][] tmp = new float[points.length][3];
        float[] pl = null;
        for ( int i = 0, n = 0; i < points.length; i++ )
        {
            n = i+1;
            float[] p = points[i];
            float[] pn = null;
            if ( p[0] == 0 && p[1] == 0 && p[2] == 0 )
            {
                for ( int k = n; k < points.length; k++ )
                {
                    pn = points[k];
                    if ( !( pn[0] == 0 && pn[1] == 0 && pn[2] == 0 ) )
                    {
                        n = k;
                        break;
                    }
                }
            }
            if ( pn != null )
            {
                if ( pl == null ) pl = pn;
                for ( int i2 = i; i2 <= n; i2++ )
                {
                    tmp[i2][0] = map( i2, i, n, pl[0], pn[0] );
                    tmp[i2][1] = map( i2, i, n, pl[1], pn[1] );
                    tmp[i2][2] = map( i2, i, n, pl[2], pn[2] );
                }
                //println( "Fixed " + (n-i) );
                i = n;
                continue;
            }
            tmp[i] = p;
            pl = p;
        }
        return tmp;
    }
}
public class InvisibleInteractiveArea
{
    float x, y, width, height;
    float pressedX, pressedY;
    boolean on = false;
    
    InvisibleInteractiveArea ( float xx, float yy, float ww, float hh )
    {
        x = xx;
        y = yy;
        width = ww;
        height = hh;
        
        Interactive.add( this );
    }
    
    void mouseEntered ()
    {
        on = true;
    }
    
    void mouseExited ()
    {
        on = false;
    }
    
    void mousePressed ( float mx, float my )
    {
        Interactive.send( this, "clickedArea", mx-x, my-y );
    }
    
    void mouseDragged ( float mx, float my, float dx, float dy )
    {
        Interactive.send( this, "draggedArea", mx-x, my-y );
    }
    
    void mouseScrolled ( float v )
    {
        Interactive.send( this, "scrolledArea", v );
    }
    
    void draw ()
    {
        if ( on )
        {
//            noFill();
//            stroke( 255, 0, 0 );
//            rect( x, y, width, height );
        }
    }
}

public class MultiSlider
{
    float x,y,width,height;
    float pressedX, pressedY;
    float pressedXLeft, pressedYLeft, pressedXRight, pressedYRight;
    boolean on = false;
    
    SliderHandle left, right, activeHandle;
    
    float values[];
    
    MultiSlider ( float xx, float yy, float ww, float hh )
    {
        this.x = xx; this.y = yy; this.width = ww; this.height = hh;
        
        left  = new SliderHandle( x, y, height, height );
        right = new SliderHandle( x+width-height, y, height, height );
        
        values = new float[]{0,1};
        
        Interactive.add( this );
    }
    
    void set ( float v1, float v2 )
    {
        left.x  = map( v1, 0, 1, x, x+width-left.width );
        right.x = map( v2, 0, 1, x, x+width-right.width );
        values[0] = v1;
        values[1] = v2;
        Interactive.send( this, "leftValueChanged",  values[0] );
        Interactive.send( this, "rightValueChanged", values[1] );
    }
    
    void mouseEntered ()
    {
        on = true;
    }
    
    void mouseExited ()
    {
        on = false;
    }
    
    void mousePressed ( float mx, float my )
    {
        if ( left.isInside( mx, my ) )       activeHandle = left;
        else if ( right.isInside( mx, my ) ) activeHandle = right;
        else                                 activeHandle = null;
        
        pressedX = mx;
        pressedXLeft  = left.x;
        pressedXRight = right.x;
    }
    
    void mouseDragged ( float mx, float my )
    {
        float vx = mx - left.width/2;
        vx = constrain( vx, x, x+width-left.width );
        
        if ( activeHandle == left )
        {
            if ( vx > right.x - (left.width / 2) ) 
            {
                if ( vx + (right.width / 2) < x + width - right.width )
                {
                    right.x = vx + (right.width / 2);
                    values[1] = map( right.x, x, x+width-left.width, 0, 1 );
                    Interactive.send( this, "rightValueChanged", values[1] );
                }
                else
                {
                    vx = right.x - left.width;
                }
            }
            values[0] = map( vx, x, x+width-left.width, 0, 1 );
            
            Interactive.send( this, "leftValueChanged", values[0] );
        }
        else if ( activeHandle == right )
        {
            if ( vx < left.x + (left.width / 2) )
            {
                if ( vx - (left.width / 2) > x )
                {
                    left.x = vx - (left.width / 2);
                    values[0] = map( left.x, x, x+width-left.width, 0, 1 );
                    Interactive.send( this, "leftValueChanged", values[0] );
                }
                else
                {
                    vx = left.x + left.width;
                }
            }
            values[1] = map( vx, x, x+width-left.width, 0, 1 );
            
            Interactive.send( this, "rightValueChanged", values[1] );
        }
        else // dragging in between handles
        {
            float dx = mx-pressedX;
            
            if ( pressedXLeft + dx >= x && pressedXRight + dx <= x+(width-right.width) )
            {
                values[0] = map( pressedXLeft + dx,  x, x+width-left.width, 0, 1 );
                left.x = pressedXLeft + dx;
                
                values[1] = map( pressedXRight + dx, x, x+width-left.width, 0, 1 );
                right.x = pressedXRight + dx;
                
                Interactive.send( this, "leftValueChanged",  values[0] );
                Interactive.send( this, "rightValueChanged", values[1] );
            }
        }
        
        if ( activeHandle != null ) activeHandle.x = vx;
    }
    
    void draw ()
    {
        noStroke();
        fill( col1 );
        rect( x, y, width, height );
        fill( on ? 200 : 220 );
        rect( left.x, left.y, right.x-left.x+right.width, right.height );
    }
    
    public boolean isInside ( float mx, float my )
    {
        return left.isInside(mx,my) || right.isInside(mx,my) || Interactive.insideRect( left.x, left.y, (right.x+right.width)-left.x, height, mx, my );
    }
}

class SliderHandle
{
    float x,y,width,height;
    
    SliderHandle ( float xx, float yy, float ww, float hh )
    {
        this.x = xx; this.y = yy; this.width = ww; this.height = hh;
    }
    
    void draw ()
    {
        rect( x, y, width, height );
    }
    
    public boolean isInside ( float mx, float my )
    {
        return Interactive.insideRect( x, y, width, height, mx, my );
    }
}

public class Slider
{
    float x, y, width, height;
    float valueX = 0, value;
    
    Slider ( float xx, float yy, float ww, float hh ) 
    {
        x = xx; 
        y = yy; 
        width = ww; 
        height = hh;
        
        valueX = x;
    
        Interactive.add( this );
    }
    
    void mouseDragged ( float mx, float my )
    {
        valueX = mx - height/2;
        
        if ( valueX < x ) valueX = x;
        if ( valueX > x+width-height ) valueX = x+width-height;
        
        value = map( valueX, x, x+width-height, 0, 1 );
        
        Interactive.send( this, "valueChanged", value );
    }
    
    public void draw ()
    {
        noStroke();
        
        fill( 100 );
        rect( x, y, width, height );
        
        fill( 120 );
        rect( valueX, y, height, height );
    }
}

