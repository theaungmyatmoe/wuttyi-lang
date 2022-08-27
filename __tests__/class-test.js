import {test} from "./test-util.js";

export default function (wuttyi) {
    test(wuttyi, `
     (begin
     
     (class Point null
      (begin
        (def constructor (self x y)
          (begin
            (set (prop self x) x)
            (set (prop self y) y)))
        (def calc (self)
          (+ (prop self x) (prop self y)))))
    (var p (new Point 10 20))
    ((prop p calc) p)
    
     )
    `, 30)
}