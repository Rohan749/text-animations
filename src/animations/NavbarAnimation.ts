import gsap from "gsap"
import { customEase } from "../../utils/animationUtils"

export const useNavAnimation = () => {
    gsap.fromTo(".navbar", {
        opacity: 0,
        y: -200
    }, {
        opacity: 1,
        y: 0,
        delay: 1.2,
        duration: 0.5,
        ease: "power3.out"
    })
}

