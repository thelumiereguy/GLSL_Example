#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

void main(){
    // Normalize screen coords
    vec2 position=gl_FragCoord.xy/u_resolution;
    
    // Create color
    vec3 color=vec3(position.x);
    
    /* plot diagonal - (0.01 - 0.0)
    *  returns 1 for all points on diagonal
    */
    float diagonal=smoothstep(.01,0.,abs(position.y-position.x));
    
    // Add our diagonal values to our color
    // Basically OR operation
    color=diagonal+color;
    
    //Similarly, AND Operation
    // color=diagonal*color;
    
    // Apply surface color
    gl_FragColor=vec4(color,1);
}