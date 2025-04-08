function validateForm() {
    const chemical_elements = {
        "H"  : "Hidrogén",
        "He" : "Hélium",
        "Li" : "Lítium",
        "Be" : "Berillium",
        "B"  : "Bór",
        "C"  : "Szén",
        "N"  : "Nitrogén",
        "O"  : "Oxigén",
        "F"  : "Fluor",
        "Ne" : "Neon",
        "Na" : "Nátrium",
        "Mg" : "Magnézium",
        "Al" : "Alumínium",
        "Si" : "Szilícium",
        "P"  : "Foszfor",
        "S"  : "Kén",
        "Cl" : "Klór",
        "Ar" : "Argon",
        "K"  : "Kálium",
        "Ca" : "Kalcium",
        "Sc" : "Szkandium",
        "Ti" : "Titán",
        "V"  : "Vanádium",
        "Cr" : "Króm",
        "Mn" : "Mangán",
        "Fe" : "Vas",
        "Co" : "Kobalt",
        "Ni" : "Nikkel",
        "Cu" : "Réz",
        "Zn" : "Cink",
        "Ga" : "Gallium",
        "Ge" : "Germánium",
        "As" : "Arzén",
        "Se" : "Szelén",
        "Br" : "Bróm",
        "Kr" : "Kripton",
        "Rb" : "Rubídium",
        "Sr" : "Stroncium",
        "Y"  : "Ittrium",
        "Zr" : "Cirkónium",
        "Nb" : "Nióbium",
        "Mo" : "Molibdén",
        "Tc" : "Technécium",
        "Ru" : "Ruténium",
        "Rh" : "Ródium",
        "Pd" : "Palládium",
        "Ag" : "Ezüst",
        "Cd" : "Kadmium",
        "In" : "Indium",
        "Sn" : "Ón",
        "Sb" : "Antimon",
        "Te" : "Tellúr",
        "I"  : "Jód",
        "Xe" : "Xenon",
        "Cs" : "Cézium",
        "Ba" : "Bárium",
        "La" : "Lantán",
        "Hf" : "Hafnium",
        "Ta" : "Tantál",
        "W"  : "Volfrám",
        "Re" : "Rénium",
        "Os" : "Ozmium",
        "Ir" : "Irídium",
        "Pt" : "Platina",
        "Au" : "Arany",
        "Hg" : "Higany",
        "Tl" : "Tallium",
        "Pb" : "Ólom",
        "Bi" : "Bizmut",
        "Po" : "Polónium",
        "At" : "Asztácium",
        "Rn" : "Radon",
        "Fr" : "Francium",
        "Ra" : "Rádium",
        "Ac" : "Aktínium",
        "Rf" : "Raderfordium",
        "Db" : "Dubnium",
        "Sg" : "Sziborgium",
        "Bh" : "Bohrium",
        "Hs" : "Hasszium",
        "Mt" : "Meitnérium",
        "Ds" : "Darmstadtium",
        "Rg" : "Röntgénium",
        "Cn" : "Kopernícium",
        "Nh" : "Nihónium",
        "Fl" : "Fleróvium",
        "Mc" : "Moszkóvium",
        "Lv" : "Livermórium",
        "Ts" : "Tenesszium",
        "Og" : "Oganeszon"
    }

    const gender_types = {
        "male"   : "Férfi",
        "female" : "Nő"
    }

    let name = document.getElementById("name").value.trim();
    let gender = gender_types[document.getElementById("gender").value];
    let email = document.getElementById("email").value.trim();
    let element = chemical_elements[document.getElementById("elements").value];
    let story = document.getElementById("story").value.trim();

    // Regex for full name (at least two words, separated by space)
    let nameRegex = /^([A-ZÁÉÍÓÖŐÚÜŰa-záéíóöőúüű]+ )+[A-ZÁÉÍÓÖŐÚÜŰa-záéíóöőúüű]+$/;

    // Regex for email validation
    let emailRegex = /^[A-ZÁÉÍÓÖŐÚÜŰa-záéíóöőúüű\.]+@[A-ZÁÉÍÓÖŐÚÜŰa-záéíóöőúüű\.]+\.[A-ZÁÉÍÓÖŐÚÜŰa-záéíóöőúüű\.]+$/;

    if (!nameRegex.test(name) || name.length < 10) {
        openDialog("A teljes névnek tartalmaznia kell egy vezeték- és egy keresztnevet! Valamint legalább 10 karakter hosszúnak kell lennie.");
        return;
    }

    if (!emailRegex.test(email)) {
        openDialog("Kérlek adj meg egy érvényes email címet!");
        return;
    }

    if (story.length < 10) {
        openDialog("A történetnek legalább 10 karakter hosszúnak kell lennie!");
        return;
    }

    var table = document.getElementById("data-table");
    table.innerHTML += ("<tr><td>" + name + "</td><td>" + email + "</td><td>" + gender + "</td><td>" + element + "</td><td>" + story + "</td></tr>");
    
    document.getElementById("name").value = "";
    document.getElementById("gender").selectedIndex = 0;
    document.getElementById("email").value = "";
    document.getElementById("elements").selectedIndex = 0;
    document.getElementById("story").value = "";
}

function openDialog(content) {
    document.getElementById("dialog-msg").innerHTML = content;
    document.getElementById("error-dialog").showModal();
}

function closeDialog() {
    document.getElementById("error-dialog").close();
}