#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

float createCircle(float radius,vec2 inputCoords,vec2 position){
    return step(radius,distance(inputCoords,position));
}

void main(){
    
    vec2 coords=gl_FragCoord.xy/u_resolution.xy-.5;
    
    vec2 inputCoords=u_mouse.xy/u_resolution.xy-.5;
    
    float outerCircle=createCircle(abs(sin(u_time))*.1,inputCoords,coords);
    
    float innerCircle=createCircle(abs(cos(u_time))*.1,inputCoords,coords);
    
    float outMostCircle=createCircle(tan(u_time)*.03,inputCoords,coords);
    
    vec3 color=vec3(
        outerCircle,
        innerCircle,
        outMostCircle
    );
    
    gl_FragColor=vec4(color,1.);
}