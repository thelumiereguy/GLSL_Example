#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

const float PI=3.14159265359;

float polygonShape(vec2 position,float radius,float sides){
    position*=2.-1.;
    float angle=atan(position.x,position.y);
    float slice=PI*2./sides;
    return step(radius,cos(floor(.5+angle/slice)*slice-angle)*length(position));
}

void main(){
    vec2 coord=gl_FragCoord.xy/u_resolution-.5;
    coord.x*=u_resolution.x/u_resolution.y;
    vec3 color=vec3(0.);
    
    float polygonValue=polygonShape(coord,.1,11.);
    
    color=vec3(polygonValue);
    
    gl_FragColor=vec4(color,1.);
}