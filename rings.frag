#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;

const vec3 milky_cream_colour=vec3(234./255.,242./255.,239./255.);
const vec3 blue_colour=vec3(31./255.,59./255.,77./255.);
const float rings=5.;

// Creates a circle shape using the Origin position
float createCircle(float radius,vec2 position){
    return step(radius,length(position)*(abs(sin(u_time))));
}

// Mixes 2 colours according to values between 0-1
vec3 getColor(float circleValue){
    return mix(milky_cream_colour,blue_colour,circleValue);
}

void main(){
    vec2 coord=gl_FragCoord.xy/u_resolution.xy-.5;
    coord.x*=u_resolution.x/u_resolution.y;
    
    vec3 color=vec3(1./rings);
    
    vec3 shape=vec3(0.);
    
    for(float index=1.;index<=rings;index++){
        vec3 circleShape=getColor(createCircle(float(index)*.05,coord));
        shape+=circleShape;
    }
    
    color*=shape;
    
    gl_FragColor=vec4(color,1.);
}
