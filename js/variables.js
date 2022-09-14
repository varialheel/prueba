const chorizos = [
    {
        "ref":"leon",
        "nombre":"Chorizo de leon",
        "descripcion":"Es un chorizo que acostumbra presentarse en forma de herradura y que tiene un notable sabor y olor a ahumado. Con un color rojo intenso característico debido a su proceso de curación marcado por las bajas temperaturas a la que se somete. Es habitual que sea un poco de picante. Se puede consumir crudo o cocinado.",
        "img":"leon.jpg",
        "precio":"14.16"
    },
    {
        "ref":"riojano",
        "nombre":"Chorizo riojano",
        "descripcion":"Este chorizo lo encontraremos en forma de sarta (herradura) con un grosor de unos 30/40 milímetros y una consistencia compacta y firme, sabor intenso y algo picante con una fuerte presencia de pimentón. Se puede comer cocinado o crudo.",
        "img":"riojano.jpg",
        "precio":"10.50"
    },
    {
        "ref":"navarra",
        "nombre":"Chorizo de navarra",
        "descripcion":"Típico de la gastronomía de Navarra es uno de los más antiguos de España. Los ingredientes son un picado de carne (de cerdo o de cerdo y vacuno) y tocino condimentada con sal, pimentón, otras especias y aditivos. Tiene un sabor intenso igual que su aroma.",
        "img":"pamplonica.jpg",
        "precio":"2.15"
    },
    {
        "ref":"gallego",
        "nombre":"Chorizo gallego",
        "descripcion":"Elaborado a base de magro de cerdo, tocino, pimentón dulce y picante, ajo y sal. Este chorizo se presenta en ristras con forma ancha y corta con un característico ahumado y un sabor intenso y picante. Suele comerse asado, frito o crudo.",
        "img":"gallego.jpg",
        "precio":"4.75"
    },
    {
        "ref":"cantabro",
        "nombre":"chorizo cántabro",
        "descripcion":"Se suele encontrar en forma de herradura o sarta, embutido en tripa de cerdo y secado en un ambiente totalmente natural usando madera para el ahumado. Utilizado mayoritariamente para cocidos aunque también se puede comer crudo, frito o a la brasa.",
        "img":"cantabro.jpg",
        "precio":"12.55"
    },
    {
        "ref":"canarias",
        "nombre":"Chorizo de Canarias",
        "descripcion":"Siendo el de Teror el más conocido de la isla, tiene una particularidad, es uno de los pocos chorizos que se suele comer untado. También puede comerse cocinado.",
        "img":"canarias.jpg",
        "precio":"15.10"
    },
    {
        "ref":"cantimpalo",
        "nombre":"Chorizo cantimpalo",
        "descripcion":"Un embutido elaborado con las carnes frescas de cerdo blanco y graso, presentado en ristras, contiene una peculiaridad, este chorizo no contiene tocino. El pimentón usado a de ser de La Vera y sin aditivos.",
        "img":"cantimpalo.jpg",
        "precio":"7.75"
    }
]
const quesos = [
    {
        "ref":"manchego",
        "nombre":"Queso Manchego",
        "descripcion":"(Castilla La Mancha), posiblemente el queso más conocido fuera de nuestras fronteras. Es un queso elaborado con leche de oveja de la raza manchega. Tiene una elaboración mínima de 30 días para quesos con peso igual o inferior a 1,5 KG y de 60 días para el resto de formatos. La curación máxima de estos quesos es de dos años. Tiene una forma cilíndrica con caras sensiblemente planas, una altura máxima de 12 cm y un diámetro de 22 cm. Una corteza dura y libre de parásitos, de color amarillo pálido, o verdoso-negruzco si no se limpia la superficie de los mohos que desarrolla.",
        "img":"queso_manchego.jpg",
        "precio":"13.50"
    },
    {
        "ref":"casar",
        "nombre":"Torta del Casar",
        "descripcion":"Nos vamos ahora hasta Cáceres para mostraros este queso elaborado mediante métodos tradicionales a base de leche cruda de oveja, procedente de ganaderías controladas, cuajo vegetal y sal. Resulta un queso de corteza ligera y fina, semidura. Como principal característica es su textura, que es muy cremosa. Una pasta de color entre blanco y marfil, con aromas lácticos y vegetales, y un gusto intenso y desarrollado.Este queso puedes encontrarlo en tres formatos diferentes, de 200 a 500 gr., de 500 a 800 gr., y de 800 a 1.100 gr.",
        "img":"torta_casar.jpg",
        "precio":"13.80"
    },
    {
        "ref":"idiazabal",
        "nombre":"Idiazabal",
        "descripcion":"Continuando en la búsqueda de los 10 mejoers quesos españoles, en Navarra nos encontramos un queso elaborado con leche de oveja Latxa y Carranzana, sin mezcla y sin pasteurizar. La zona de producción y elaboración de la leche y el queso es el País Vasco y Navarra, salvo los municipios que integran el Valle del Roncal. Un queso con una maduración mínima de dos meses, un queso madurado de pasta prensada, cuyo peso oscila entre 1 y 3 kilos, que se puede presentar sin ahumar o ahumado, según la tradición gastronómica de los diferentes valles.",
        "img":"idiazabal.jpg",
        "precio":"4.60"
    },
    {
        "ref":"cabrales",
        "nombre":"Cabrales",
        "descripcion":"Se trata de uno de los quesos más afamados de Asturias. Es natural, elaborado artesanalmente por los propios ganaderos, con leche cruda de vaca o con mezcla de dos o tres clases de leche: vaca, oveja y cabra. Una vez elaborado el queso, pasa a cuevas naturales en la montaña entre dos y cuatro meses para su maduración. Las condiciones del lugar favorecen el desarrollo de mohos de tipo penicillium en el queso durante la maduración, lo que le aporta las zonas y vetas de color azul-verdoso. Un sabor levemente picante, más acusado cuando está elaborado con leche de cabra y oveja pura o mezcla.  Cuando el queso está listo para consumir, se envuelve en papel de aluminio de color verde.",
        "img":"cabrales.jpg",
        "precio":"4.80"
    },
    {
        "ref":"mahon",
        "nombre":"Mahon",
        "descripcion":"¿Has oído hablar del queso mahón? Elaborado con leche de vacas de Menorca  mediante un método de tradición milenaria. Las características medio ambientales de la zona, como el viento, la humedad y la luz proporcionan a estos quesos su peculiar sabor, intenso e inconfundible, que se ha convertido en el atributo más valorado.",
        "img":"mahon.jpg",
        "precio":"7.90"
    },
    {
        "ref":"majorero",
        "nombre":"Majorero",
        "descripcion":"En nuestro paseo en busca de los mejores quesos, nos quedamos ahora en una isla fascinante, Fuerteventura, donde encontramos  este queso Denominación de Origen Protegida. Se elabora los métodos tradicionales con leche cruda o pasteurizada de cabra majorera. A veces, se añade un máximo de 15% de leche de oveja canaria. Es un queso de pasta prensada, de forma cilíndrica, con un peso entre 1kg, y 6 kg. Una masa compacta, de textura cremosa y sabor acídulo, algo picante. Se reconoce por las impresiones de las pleitas en los laterales y de la quesera en las caras de las bases.",
        "img":"majorero.jpg",
        "precio":"4.90"
    },
    {
        "ref":"grazalema",
        "nombre":"Grazalema",
        "descripcion":"Viajamos ahora hasta la provincia de Cádiz para descubrir  uno de los quesos más cotizados. Se elabora con leche de ovejas Merinas y de cabras de raza Payoya, que son autóctonas de la sierra de Grazalema. Es un queso cilíndrico, con un peso que oscila entre los 1,5 y los 2,5 kilos. Tiene una textura firme y un sabor intenso, graso y un poco picante.",
        "img":"grazalema.jpg",
        "precio":"6.20"
    },
    {
        "ref":"zamorano",
        "nombre":"Queso Zamorano",
        "descripcion":"Este queso tiene forma cilíndrica, sus caras son sensiblemente planas. Puede alcanzar una altura del queso un máximo de 14 cm, el diámetro hasta 24 cm, y puede pesar hasta 4 kg. La corteza es dura, de color amarillo pálido o gris oscuro y bien definida. La pasta es firme y compactada, de color variable desde el blanco hasta el marfil amarillento, con algunos ojos pequeños. Aquí queremos destacar el Vellón de Fuentesaúco, Queso Denominación de Origen Zamorano, fabricado de manera artesanal en Quesería La Antigua. Una corteza natural color pardo y pleita bien marcada y definida; bañada en aceite de oliva durante la maduración.La pasta es firme y compacta de color marfil amarillento, pudiendo presentar ojos de tamaño pequeño, repartidos uniformemente por todo el corte.",
        "img":"queso_zamorano.jpg",
        "precio":"8.30"
    }
]
const cards = [
    {
        "nombre":"pepe",
        "opinion":"muy buena",
        "imagen":"assets/images/cards/p1.png"
    },
    {
        "nombre":"paco",
        "opinion":"muy regular",
        "imagen":"assets/images/cards/p2.png"
    },
    {
        "nombre":"anatolia",
        "opinion":"pesimo servicio",
        "imagen":"assets/images/cards/p3.png"
    },
    {
        "nombre":"pepa",
        "opinion":"Buenisima",
        "imagen":"assets/images/cards/p4.png"
    },
    {
        "nombre":"yusuf",
        "opinion":"i dont speak spanish",
        "imagen":"assets/images/cards/p5.png"
    },
    {
        "nombre":"maria",
        "opinion":"quiero caramelos",
        "imagen":"assets/images/cards/p6.png"
    },
    {
        "nombre":"baltasar",
        "opinion":"no me gusta",
        "imagen":"assets/images/cards/p7.png"
    },
    {
        "nombre":"patricia",
        "opinion":"yo le suspenderia",
        "imagen":"assets/images/cards/p8.png"
    },
]