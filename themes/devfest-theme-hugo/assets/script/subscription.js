// Subscription
$$('form.subscribe').forEach(formElt => {
    console.log('subscribe', formElt);
    formElt.onsubmit = () => {
        const values = Array.from(formElt.elements)
            .reduce(
                (acc, elt) => {
                    if (elt.name) {
                        acc[elt.name] = elt.value;
                    }
                    return acc;
                },
                {});
        subscribe(values);
    };
});
