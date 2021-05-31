#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

float createCircle(vec2 position,vec2 mouseCoords,float scale){
    return distance(position,mouseCoords)*scale;
}

// exponential smooth min (k = 32);
float smin(float a,float b,float k){
    float res=exp2(-k*a)+exp2(-k*b);
    return-log2(res)/k;
}

float createMetaball(float value1,float value2){
    return smin(value1,value2,20.);
}

void main(){
    vec2 coord=gl_FragCoord.xy/u_resolution-.5;
    vec2 mouseCoords=u_mouse.xy/u_resolution-.5;
    coord.x*=u_resolution.x/u_resolution.y;
    mouseCoords.x*=u_resolution.x/u_resolution.y;
    
    vec3 color=vec3(0.);
    
    float circle1=createCircle(vec2(.0,.1),coord,.6);
    float circle2=createCircle(mouseCoords,coord,2.);
    
    color+=step(createMetaball(circle1,circle2),.05);
    
    color*=(vec3(1.,0.,0.)+circle2);
    color*=(vec3(0.1686, 1.0, 0.0)+exp2(circle1));
    
    gl_FragColor=vec4(color,1.);
}