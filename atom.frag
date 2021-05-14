#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

const vec3 red=vec3(208./255.,0.,0.);
const vec3 backgroundColor=vec3(28./255.,49./255.,68./255.);
const vec3 yellow=vec3(255./255.,186./255.,8./255.);

float createCircle(float radius,vec2 position,bool inverted){
    if(inverted){
        return smoothstep(length(position)-.03,length(position),radius);
    }else{
        return step(radius,length(position));
    }
}

// Computes location of new point, and draws a circle there with the given offset
float createCircleOffsetted(float radius,vec2 position,float offset){
    float x=cos(-u_time);
    float y=sin(-u_time);
    vec2 newPoint=vec2(x,y)*offset;
    return smoothstep(distance(newPoint,position),distance(newPoint,position),radius);
}

/**
* Values between inner radius and outer radius will be 1.0
*/
float makeRing(float innerRadius,float outerRadius,vec2 position){
    return abs(
        smoothstep(outerRadius,outerRadius+.01,length(position))
        -smoothstep(innerRadius,innerRadius+.01,length(position))
    );
}

void main(){
    vec2 coords=gl_FragCoord.xy/u_resolution-.5;
    coords.x*=u_resolution.x/u_resolution.y;
    
    vec3 color=vec3(1.);
    
    float nucleus=createCircle(.06,coords.xy,true);
    
    float shell=makeRing(.195,.2,coords.xy);
    
    float electron=createCircleOffsetted(.02,coords.xy,.2);
    
    color*=vec3(shell+(nucleus*yellow))+(red*electron);
    
    gl_FragColor=vec4(color+backgroundColor,1.);
}
