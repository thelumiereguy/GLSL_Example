#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

float circle_shape(vec2 position,float radius){
    return step(radius,length(position));
}

void main(){
    // for normalizing screen
    vec2 position=(gl_FragCoord.xy/u_resolution)-.5;
    
    //setting black color
    vec3 color=vec3(0.);
    
    // create circle shape
    float circle=circle_shape(position,.25);
    
    // update color
    color=vec3(circle);
    gl_FragColor=vec4(color,1.);
}