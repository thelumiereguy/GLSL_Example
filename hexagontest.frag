#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

const float PI=3.14159265359;

float polygonShape(vec2 pos,float radius,float sides){
    float angle=atan(pos.x,pos.y);
    float slice=2.*PI/sides;
    float angulus=(PI-slice)/2.;
    float modangle=abs(mod(angle,slice));
    float dis=radius/sin(PI-angulus-modangle);
    // float angle=((PI*2.)/sides)/2.;
    // float ab=sin(angle)*radius;
    return step(dis,length(pos));
}

void main(){
    vec2 coord=gl_FragCoord.xy/u_resolution-.5;
    coord.x*=u_resolution.x/u_resolution.y;
    vec3 color=vec3(0.);
    
    float polygonValue=polygonShape(coord,.1,5.);
    
    color=vec3(polygonValue);
    
    gl_FragColor=vec4(color,1.);
}