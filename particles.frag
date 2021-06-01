#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

float createCircle(vec2 position,float radius){
    return step(length(position-.5),radius);
}

void main(){
    vec2 coord=gl_FragCoord.xy/u_resolution;
    coord.x*=u_resolution.x/u_resolution.y;
    
    vec2 mouseCoord=u_mouse.xy/u_resolution;
    
    vec3 color=vec3(0.);
    
//make waves in the wave ;)
float sinValue=(sin((coord.x*20.)+u_time)*.03);

//create the actual wave
float actualWave=step(
    coord.y,
    sinValue+cos(u_time)*.2+.3
);

vec2 circleCoords=coord*50.;
circleCoords=vec2(
    mod(circleCoords.x,1.),
    mod(circleCoords.y,1.)
);

float circle=createCircle(circleCoords,.1);

color+=(circle*actualWave);

gl_FragColor=vec4(color,1.);
}