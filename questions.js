document.addEventListener("DOMContentLoaded", () => {

    // SECTION A: TRUE OR FALSE
    const tf = [
        ["Xylem transports water and mineral ions.", "T"],
        ["Phloem transports organic substances.", "T"],
        ["Transpiration is the loss of water vapour.", "T"],
        ["Water enters root hair cells by osmosis.", "T"],
        ["Mature xylem vessel elements are generally dead.", "T"],
        ["Phloem transports only water.", "F"],
        ["Stomata are pores in the epidermis.", "T"],
        ["Water vapour can diffuse through stomata.", "T"],
        ["The apoplast pathway uses cell walls.", "T"],
        ["The symplast pathway uses connected cytoplasm.", "T"],
        ["Root hairs increase the absorption surface area.", "T"],
        ["Xylem never transports mineral ions.", "F"],
        ["Lignin strengthens xylem walls.", "T"],
        ["Sieve tubes are associated with companion cells.", "T"],
        ["Transpiration occurs mainly from aerial parts.", "T"],
        ["Osmosis involves a partially permeable membrane.", "T"],
        ["Xylem mainly transports manufactured sugars.", "F"],
        ["Transpiration pull contributes to water movement.", "T"],
        ["Apoplast movement occurs only through cytoplasm.", "F"],
        ["Transpiration involves water loss from plants.", "T"]
    ];

    // SECTION B: MULTIPLE CHOICE
    const mcq = [
        ["Which tissue mainly transports water?", ["Phloem", "Xylem", "Epidermis", "Cortex"], 1],
        ["Which tissue transports sucrose?", ["Xylem", "Phloem", "Cuticle", "Root hair"], 1],
        ["Water enters root hairs mainly by:", ["Osmosis", "Photosynthesis", "Respiration", "Translocation"], 0],
        ["Leaf pores involved in transpiration are:", ["Vessels", "Stomata", "Sieve plates", "Root caps"], 1],
        ["Xylem walls are strengthened by:", ["Starch", "Lignin", "Sucrose", "Chlorophyll"], 1],
        ["Apoplast movement occurs through:", ["Cell walls", "Nuclei", "Chloroplasts", "Vacuoles only"], 0],
        ["Symplast movement occurs through:", ["Cytoplasm", "Cuticle", "Air spaces only", "Xylem walls"], 0],
        ["Water vapour leaves a leaf mainly through:", ["Stomata", "Roots", "Seeds", "Flowers"], 0],
        ["Root hairs help plants to:", ["Absorb water", "Make pollen", "Release seeds", "Transport sugars only"], 0],
        ["Sieve tubes are associated with:", ["Companion cells", "Root caps", "Guard hairs", "Pollen"], 0],
        ["Transpiration is the loss of:", ["Water vapour", "Sugar", "Pollen", "Mineral crystals"], 0],
        ["The main water-conducting tissue is:", ["Phloem", "Xylem", "Cuticle", "Cortex"], 1],
        ["Movement of water through a partially permeable membrane is:", ["Osmosis", "Translocation", "Evaporation", "Respiration"], 0],
        ["An organic substance transported by phloem is:", ["Sucrose", "Lignin", "Cellulose only", "Chlorophyll"], 0],
        ["Mature xylem vessels are generally:", ["Hollow", "Full of nuclei", "Stomatal pores", "Root hairs"], 0],
        ["A source supplies:", ["Assimilates", "Only water vapour", "Pollen", "Lignin"], 0],
        ["A sink uses or stores:", ["Assimilates", "Stomata", "Mineral crystals only", "Water vapour only"], 0],
        ["Plasmodesmata connect neighbouring:", ["Cytoplasms", "Cuticles", "Air spaces", "Vessel lumens"], 0],
        ["Transpiration occurs mainly from:", ["Leaves", "Deep roots", "Seeds only", "Wood only"], 0],
        ["Xylem also transports:", ["Mineral ions", "Seeds", "Pollen", "Stomata"], 0],
        ["Sieve tubes are part of:", ["Phloem", "Xylem", "Cuticle", "Root cap"], 0],
        ["Water evaporates from moist surfaces of:", ["Mesophyll cells", "Seeds only", "Root caps only", "Flowers only"], 0],
        ["Stomata are found in the:", ["Epidermis", "Xylem lumen only", "Root cap only", "Seed coat only"], 0],
        ["Water vapour moving down a concentration gradient is:", ["Diffusion", "Translocation", "Germination", "Photosynthesis"], 0],
        ["Companion cells support:", ["Sieve tube elements", "Xylem vessels only", "Cuticle only", "Root caps"], 0]
    ];

    // SECTION C: FILL IN THE BLANKS
    const fill = [
        ["The water-conducting tissue is ____.", ["xylem"]],
        ["The tissue transporting sucrose is ____.", ["phloem"]],
        ["Water vapour loss from aerial parts is ____.", ["transpiration"]],
        ["Water enters root hairs by ____.", ["osmosis"]],
        ["Leaf pores are called ____.", ["stomata"]],
        ["Xylem walls are strengthened by ____.", ["lignin"]],
        ["The pathway through cell walls is the ____ pathway.", ["apoplast"]],
        ["The pathway through connected cytoplasm is the ____ pathway.", ["symplast"]],
        ["Water vapour leaves mainly through ____.", ["stomata"]],
        ["Root hairs increase the surface area for ____.", ["absorption"]],
        ["Sieve tubes are associated with ____ cells.", ["companion"]],
        ["Movement of assimilates in phloem is called ____.", ["translocation"]],
        ["Water vapour moves by ____.", ["diffusion"]],
        ["Photosynthetic leaf tissue is called ____.", ["mesophyll"]],
        ["An assimilate-supplying region is a ____.", ["source"]],
        ["An assimilate-using or storing region is a ____.", ["sink"]],
        ["Water movement through a partially permeable membrane is ____.", ["osmosis"]],
        ["Xylem contains water-conducting ____.", ["vessels"]],
        ["The water-conducting tissue is ____.", ["xylem"]],
        ["Tiny openings for gas exchange are ____.", ["stomata"]],
        ["The symplast pathway passes through the ____.", ["cytoplasm"]],
        ["The apoplast pathway passes through cell ____.", ["walls"]],
        ["Mineral ions are transported in the ____.", ["xylem"]],
        ["Water loss contributes to transpiration ____.", ["pull"]],
        ["Water vapour exits through stomatal ____.", ["pores"]]
    ];

    const byId = id => document.getElementById(id);

    // DISPLAY QUESTIONS
    function render(id, data, type) {
        const root = byId(id);

        if (!root) return;

        data.forEach((q, i) => {
            const box = document.createElement("div");
            box.className = "question";

            let html = `<p><b>${i + 1}.</b> ${q[0]}</p>`;

            if (type === "tf") {
                html += ["T", "F"].map(value => `
                    <label>
                        <input type="radio" name="tf${i}" value="${value}">
                        ${value === "T" ? "True" : "False"}
                    </label>
                `).join("");
            } else if (type === "mcq") {
                html += q[1].map((value, j) => `
                    <label>
                        <input type="radio" name="mcq${i}" value="${j}">
                        ${String.fromCharCode(65 + j)}. ${value}
                    </label>
                `).join("");
            } else {
                html += `
                    <input
                        type="text"
                        name="fill${i}"
                        placeholder="Your answer"
                        autocomplete="off"
                    >
                `;
            }

            html += `<div class="feedback" id="fb-${type}-${i}" aria-live="polite"></div>`;

            box.innerHTML = html;
            root.appendChild(box);
        });
    }

    render("tf", tf, "tf");
    render("mcq", mcq, "mcq");
    render("fill", fill, "fill");

    // SHOW FEEDBACK
    function feedback(type, i, ok, answer) {
        const el = byId(`fb-${type}-${i}`);

        if (!el) return;

        el.textContent = ok ? "Correct ✓" : `Correct answer: ${answer}`;
        el.className = `feedback ${ok ? "correct" : "incorrect"}`;
    }

    // CHECK ANSWERS
    const check = byId("checkAnswers");

    if (check) {
        check.addEventListener("click", () => {

            let score = 0;

            tf.forEach((q, i) => {
                const selected = document.querySelector(`input[name="tf${i}"]:checked`);
                const ok = !!selected && selected.value === q[1];

                if (ok) score++;

                feedback(
                    "tf",
                    i,
                    ok,
                    q[1] === "T" ? "True" : "False"
                );
            });

            mcq.forEach((q, i) => {
                const selected = document.querySelector(`input[name="mcq${i}"]:checked`);
                const ok = !!selected && Number(selected.value) === q[2];

                if (ok) score++;

                feedback(
                    "mcq",
                    i,
                    ok,
                    q[1][q[2]]
                );
            });

            fill.forEach((q, i) => {
                const input = document.querySelector(`[name="fill${i}"]`);

                const normalize = value =>
                    value.trim().toLowerCase().replace(/[.,!?]/g, "");

                const ok = !!input &&
                    q[1].some(answer => normalize(input.value) === normalize(answer));

                if (ok) score++;

                feedback(
                    "fill",
                    i,
                    ok,
                    q[1].join(" / ")
                );
            });

            const scoreEl = byId("score");

            if (scoreEl) {
                scoreEl.textContent = `Objective Score: ${score} / 70`;
            }
        });
    }

    // CLEAR ANSWERS
    const clear = byId("clearAnswers");

    if (clear) {
        clear.addEventListener("click", () => {

            document.querySelectorAll("#tf input, #mcq input, #fill input")
                .forEach(element => {
                    if (element.type === "radio") {
                        element.checked = false;
                    } else {
                        element.value = "";
                    }
                });

            document.querySelectorAll(".feedback").forEach(element => {
                element.textContent = "";
                element.className = "feedback";
            });

            const scoreEl = byId("score");

            if (scoreEl) {
                scoreEl.textContent = "";
            }
        });
    }

});