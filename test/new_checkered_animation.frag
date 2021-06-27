#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

void main(){
    vec2 coord=(gl_FragCoord.xy/u_resolution)*2.-1.;
    vec3 color=vec3(0.);
    
    coord.y*=2.;
    coord.y=floor(coord.y)*2.5;
    
    float sinX=sin(coord.x*34.5+(cos(coord.y)+u_time));
    float sinY=sin(coord.y+(sin(coord.x)+u_time));
    
    color+=(1.-(1.-sinY))/sinX;
    
    gl_FragColor=vec4(color,1.);
}