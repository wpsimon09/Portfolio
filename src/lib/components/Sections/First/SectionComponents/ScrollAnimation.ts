import * as THREE from 'three'
import { Material } from 'three'
function lerp(x:number, y:number, a:number):number {
    return (1 - a) * x + a * y
}

function scalePercent(start:number, end:number, scrollPercent:number) {
    return (scrollPercent - start) / (end - start)
}

const animationScripts: { start: number; end: number; func: () => void }[] = []

