#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

float createCircle(vec2 position,float radius){
    return step(length(position),radius);
}

float line(vec2 pointA,vec2 pointB){
    return smoothstep(.002,.001,abs(pointA.y-pointA.x));
}

void main(){
    vec2 coord=gl_FragCoord.xy/u_resolution-.5;
    coord.x*=u_resolution.x/u_resolution.y;
    vec3 color=vec3(1.);
    
    float circle1=createCircle(coord-vec2(.25*sin(u_time),.25),.05);
    float circle2=createCircle(coord,.05);
    float circle3=createCircle(coord-vec2(-.25*sin(u_time),-.25),.05);
    
    float line1=line(coord,coord-vec2(-.25,-.25));
    
    color*=(circle1+circle2+circle3+line1);
    
    gl_FragColor=vec4(color,1.);
}