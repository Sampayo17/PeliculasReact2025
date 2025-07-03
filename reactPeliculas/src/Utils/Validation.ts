import * as Yup from "yup";

export default function ValidationConfig() {
  Yup.addMethod(Yup.string, "firstLetterUpCasse", function () {
    return this.test(
      "firts-letter",
      "La primera letra ebe ser mayuscula",
      function (valor) {
        if (valor && valor.length > 0) {
          const firtletter = valor.substring(0, 1);
          return firtletter === firtletter.toUpperCase();
        }

        return true;
      }
    );
  });
}
