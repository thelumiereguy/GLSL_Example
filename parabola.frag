#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

float createCircle(vec2 position,float radius){
    return step(length(position-vec2(.5)),radius);
}

float parabola(vec2 position,float pct,vec2 inputPosition){
    return smoothstep(pct+.001,pct,position.y);
}

void main(){
    vec2 coord=(gl_FragCoord.xy/u_resolution);
    vec3 color=vec3(0.);
    
    // float circle=createCircle(coord,.3);
    // color+=circle;
    
    float pct=.04*sin(coord.x*3.14+u_time*3.)+.2;
    float parabolaValue=parabola(coord,pct,vec2(.0,-1));
    
    color+=(parabolaValue*vec3(.1,.1,.3));
    
    gl_FragColor=vec4(color,1.);
}