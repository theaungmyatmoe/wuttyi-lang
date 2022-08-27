class Jit {
    transformDefToLambda(defExp) {
        const [_tag, name, params, body] = defExp;

        // JIT - runtime transformation
        return ['var', name, ['lambda', params, body]];
    }

    transformSwitchToIf(switchExp) {
        const [_tag, ...cases] = switchExp;

        const ifExp = ['if', null, null, null];

        let current = ifExp;

        for (let i = 0; i < cases.length - 1; i++) {
            const [currentCond, currentBlock] = cases[i];

            current[1] = currentCond;
            current[2] = currentBlock;

            const next = cases[i + 1];
            const [nextCond, nextBlock] = next;

            current[3] = nextCond === 'else' ? nextBlock : ['if'];

            current = current[3];
        }

        return ifExp;

    }


    transformIncToSet(setExp) {
        const [_tag, name] = setExp;

        // (++ foo)
        //   (set foo (+ foo 1))
        return ['set', name, ['+', name, 1]];
    }


    transformDecToSet(setExp) {
        const [_tag, name] = setExp;

        // (-- foo)
        //   (set foo (- foo 1))
        return ['set', name, ['-', name, 1]];
    }

    transformIncValToSet(setExp) {
        const [_tag, name, inc_value] = setExp;
        // (+= foo)
        //   (set foo (+ foo inc_value))
        return ['set', name, ['+', name, inc_value]];
    }

    transformDecValToSet(setExp) {
        const [_tag, name, dec_value] = setExp;
        // (-= foo)
        //   (set foo (- foo dec_value))
        return ['set', name, ['-', name, dec_value]];
    }

    transformForToWhile(whileExp) {
        // For-loop: (for init condition modifier body )
        // Syntactic sugar for: (begin init (while condition (begin body modifier)))
        const [_tag, init, condition, modifier, body] = whileExp;
        return [
            'begin',
            init,
            ['while', condition, ['begin', body, modifier]]
        ];
    }
}

export default Jit;