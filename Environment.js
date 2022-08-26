class Environment {

    // create a variable environment (table of environment)
    constructor(record = {}, parent = null) {
        this.record = record;
        this.parent = parent;
    }

    // set the variable to the env with the given name and value
    define(name, value) {
        this.record[name] = value;
        return value;
    }

    // Update the existing variable
    assign(name, value) {
        this.resolve(name).record[name] = value;
        return value;
    }

// get the variable value from record
    lookup(name) {
        return this.resolve(name).record[name];
    }

// return the specific environment in which a variable is defined, or throw if a variable is not defined
    resolve(name) {
        if (this.record.hasOwnProperty(name)) {
            return this;
        }

        if (this.parent == null) {
            throw new ReferenceError(`ReferenceError: ${name} is not defined`)
        }

        return this.parent.resolve(name);
    }

}

export default Environment;