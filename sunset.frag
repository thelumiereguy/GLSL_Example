#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

float createCircle(vec2 position,float radius){
    return step(length(position),radius);
}

float fillParabola(vec2 position,float pct,vec2 inputPosition){
    return step(position.y,pct);
}

void main(){
    vec2 coord=(gl_FragCoord.xy/u_resolution)-.5;
    coord.x*=u_resolution.x/u_resolution.y;
    vec3 color=vec3(0.);
    
    float circle=createCircle(coord,.1);
    
    float pct=.05*sin(coord.x*3.14+u_time*3.);
    float sinValue=fillParabola(coord,pct,vec2(.0,-1));
    
    vec3 circleColor=(circle*vec3(255./255.,139./255.,61./255.));
    color+=(sinValue*mix(vec3(.1,.1,.3),circleColor,-circle))+circleColor;
    
    gl_FragColor=vec4(color,1.);
}