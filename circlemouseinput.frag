#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

float createCircle(float radius,vec2 inputCoords,vec2 position){
    return step(radius,distance(inputCoords,position));
}

float createSquare(float length,vec2 inputCoords,vec2 position){
    return step(length,abs(inputCoords.x-position.x))+
    step(length,abs(inputCoords.y-position.y));
}

void main(){
    
    vec2 coords=(gl_FragCoord.xy/u_resolution.xy-.5);
    coords.x*=u_resolution.x/u_resolution.y;
    
    vec2 inputCoords=(u_mouse.xy/u_resolution.xy-.5);
     inputCoords.x*=u_resolution.x/u_resolution.y;
    
    float outerCircle=createCircle(abs(sin(u_time))*.1,inputCoords,coords);
    
    float innerCircle=createCircle(abs(cos(u_time))*.1,inputCoords,coords);
    
    float outMostCircle=createSquare(abs(tan(u_time))*.1,inputCoords,coords);
    
    vec3 color=vec3(
        outerCircle,
        innerCircle,
        outMostCircle
    );
    
    gl_FragColor=vec4(color,1.);
}