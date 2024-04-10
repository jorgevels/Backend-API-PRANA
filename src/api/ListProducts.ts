import express from 'express';
const router = express.Router();

// Define el tipo para un producto
export type Product = {
  id: string;
  title: string;
  name: string;
  brand: string;
  price: number;
  oldPrice: number;
  best: boolean;
  featured: boolean;
  recommended?: boolean; 
  time?: string; 
  image: string;
  gallarey: { sku: string; url: string; }[];
  stars: number;
  description: string;
};

// Define una lista de productos como una variable global (o exporta esta lista desde otro módulo)
export const products: Product[] = [
  // TRATAMIENTOS
  {
      'id': '1',
      'title': 'Tratamiento',
      'name': 'Tratamiento capilar Di Vou',
      'brand': 'Kanechom',
      'price': 32000,
      'oldPrice': 35000,
      'best': false,
      'featured': false,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1674775682/MetaStore/Divou-leave_u5srij.jpg',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674775682/MetaStore/Divou-leave_u5srij.jpg',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674775682/MetaStore/Divou-leave_u5srij.jpg',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674775682/MetaStore/Divou-leave_u5srij.jpg',
        },
      ],
      'stars': 4.5,
      'description': 'La crema para peinar sin enjuague Divou Kanechom es un éxito ¡nutrición! Mucho brillo y suavidad, justo como tu cabello necesita. Increíble hidratación, mega reparación de puntas abiertas y remedio para el frizz. ¡Este es el producto que toda diva merece!',
  },
    
  {
      'id': '2',
      'title': 'Tratamiento',
      'name': 'Mascarilla Acondicionante Fuerza y vigor',
      'brand': 'Kanechom',
      'price': 32000,
      'oldPrice': 36000,
      'best': false,
      'featured': false,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1711038417/MetaStore/fuerza-y-vigor-acondicionadores-de-la-mascara_fljdau.png',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1711038417/MetaStore/fuerza-y-vigor-acondicionadores-de-la-mascara_fljdau.png',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1711038417/MetaStore/fuerza-y-vigor-acondicionadores-de-la-mascara_fljdau.png',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1711038417/MetaStore/fuerza-y-vigor-acondicionadores-de-la-mascara_fljdau.png',
        },
      ],
      'stars': 3.5,
      'description': 'La mascarilla acondicionadora Fuerza y Vigor, da una hidratación instantánea y vitalidad. Biotin y Jaborandi fortalecen los hilos y promueven la resistencia. Tiene una acción que ayuda al crecimiento del cabello.',
  },
    {
      'id': '3',
      'title': 'Tratamiento',
      'name': 'Mascarilla acondicionante SosSegada',
      'brand': 'Kanechom',
      'price': 32000,
      'oldPrice': 34000,
      'best': false,
      'featured': false,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1711038430/MetaStore/sossegada_ecjrki.png',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1711038430/MetaStore/sossegada_ecjrki.png',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1711038430/MetaStore/sossegada_ecjrki.png',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1711038430/MetaStore/sossegada_ecjrki.png',
        },
      ],
      'stars': 3.5,
      'description': 'La mascarilla acondicionadora Kanechom Sossegada proporciona una hidratación profunda al cabello, dejándolo sano y con un brillo increíble. Tiene nutrientes en su fórmula que ofrecen la revitalización del cabello dañado, es un tratamiento completo para promover el cabello sedoso con una suavidad espectacular.',
  },
  // SKALA
  
  {
      'id': '4',
      'title': 'Tratamiento',
      'name': 'Mais Cachos',
      'brand': 'Skala',
      'price': 23000,
      'oldPrice': 28000,
      'best': false,
      'featured': false,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1712616594/MetaStore/Skala-1_pga1tq.jpg',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712616594/MetaStore/Skala-1_pga1tq.jpg',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712616594/MetaStore/Skala-1_pga1tq.jpg',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712616594/MetaStore/Skala-1_pga1tq.jpg',
        },
      ],
      'stars': 3.5,
      'description': 'Tratamiento Mais Cachos Skala - Nutrición y Definición Excepcional para tu Cabello Crespo 🌀 El Tratamiento Mais Cachos de Skala, también conocido como Skala Azul, es una revolución en el cuidado de los rizos. Diseñado para abrazar la belleza natural de tu cabello crespo.',
  },
  {
      'id': '5',
      'title': 'Tratamiento',
      'name': 'Crema Hidratante 2 En 1 Babosa X 1000 Gr -',
      'brand': 'Skala',
      'price': 22000,
      'oldPrice': 25000,
      'best': false,
      'featured': false,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1712616794/MetaStore/Skala-5_cjeec3.jpg',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712616794/MetaStore/Skala-5_cjeec3.jpg',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712616794/MetaStore/Skala-5_cjeec3.jpg',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712616794/MetaStore/Skala-5_cjeec3.jpg',
        },
      ],
      'stars': 3.5,
      'description': 'La mascarilla y crema de peinar Babosa Skala fue especialmente diseñada para las onduladas.  Su fórmula no contiene sulfatos, parabenos, siliconas, petrolato ni aceite mineral. Su potente compuesto de aceites vegetales que ayuda a fortalecer y dar brillo al cabello: Aceite de girasol: rico en vitamina E, A y muchos minerales.',
  },
  {
      'id': '6',
      'title': 'Tratamiento',
      'name': 'Tratamiento Divino Potao 1000 Gr',
      'brand': 'Skala',
      'price': 22000,
      'oldPrice': 26000,
      'best': false,
      'featured': false,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1712616794/MetaStore/Skala-4_qinhab.jpg',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712616794/MetaStore/Skala-4_qinhab.jpg',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712616794/MetaStore/Skala-4_qinhab.jpg',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712616794/MetaStore/Skala-4_qinhab.jpg',
        },
      ],
      'stars': 3.5,
      'description': 'El Divino Potao es el tratamiento ideal  para el pelo en transición. VEGANO,  controla el frizz, hidrata y moldea tus crespos. Libre de sal, parabeno, siliconas y petrolatos. Aceite de Ricino: Fortalece la fibra capilar y previene la ruptura del cabello Aceite de Argán: Rico en ácidos grasos y Vitamina.',
  },
        
  //PEAR COLLETIONS
  {
      'id': '7',
      'title': 'Tratamiento',
      'name': 'Tratameinto capilar Comida para el cabello',
      'brand': 'The Pear Colletions',
      'price': 19000,
      'oldPrice': 23000,
      'best': true,
      'featured': false,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1674775683/MetaStore/Tratamiento-capilar_rcsw0w.jpg',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674775683/MetaStore/Tratamiento-capilar_rcsw0w.jpg',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674775683/MetaStore/Tratamiento-capilar_rcsw0w.jpg',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674775683/MetaStore/Tratamiento-capilar_rcsw0w.jpg',
        },
      ],
      'stars': 5,
      'description': 'Efectivo tratamiento capilar para que luzcas un Cabello hidratado y revitalizado. Contiene cera de abejas y agacate tratamiento perfecto para revitalizar cabellos débiles ó quebradizos, tratados con permanentes, alisados, cepillados y tinturados. Caída*: caída por quiebre.',
  },
  {
      'id': '8',
      'title': 'Tratamiento',
      'name': 'Tratameinto capilar Comida para el cabello de Coco',
      'brand': 'The Pear Colletions',
      'price': 22500,
      'oldPrice': 26000,
      'best': true,
      'featured': false,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1712617040/MetaStore/las-dos_gvp2sh.jpg',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712617041/MetaStore/PEAR0110-2_fhymi7.jpg',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712617040/MetaStore/PEAR0110-1_zcvbqa.jpg',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712617043/MetaStore/PEAR0110-3.1_yqjivk.jpg',
        },
      ],
      'stars': 5,
      'description': 'Efectivo tratamiento capilar para que luzcas un Cabello hidratado y revitalizado. Contiene cera de abejas y agacate tratamiento perfecto para revitalizar cabellos débiles ó quebradizos, tratados con permanentes, alisados, cepillados y tinturados. Caída*: caída por quiebre.',
  },
  {
      'id': '9',
      'title': 'Tratamiento',
      'name': 'Tratamiento Capilar Semillas de Lino ',
      'brand': 'The Pearl Colletions',
      'price': 35000,
      'oldPrice': 39000,
      'best': false,
      'featured': false,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1674774134/MetaStore/tratamiento-capilar-lino_xlvahd.jpg',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674774134/MetaStore/tratamiento-capilar-lino_xlvahd.jpg',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674774134/MetaStore/tratamiento-capilar-lino_xlvahd.jpg',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674774134/MetaStore/tratamiento-capilar-lino_xlvahd.jpg',
        },
      ],
      'stars': 3.5,
      'description': 'Ampolleta semillas de lino x 24 und x 12ml the Pearl collection, Tratamiento capilar intensivo tópico a base de aceites naturales ideal para cabellos maltratados enriquecido con extractos naturales, D-pantenol, karite, keratina, silicona y leche de cabra, fortalece desde la raíz del cuero cabelludo hasta las puntas, dándole a la fibra capilar nutrientes esenciales para su brillo, sedosidad, moldeamiento, suavidad Y estabilidad capilar. Libre de parabenos y de sal, ayuda a hidratar y a moldear la fibra capilar.',
    },
    {
      'id': '11',
      'title': 'Barbera',
      'name': 'Barbera metalica camuflada',
      'brand': 'BarberShop',
      'price': 22000,
      'oldPrice': 20000,
      'best': true,
      'featured': true,
      'time': 'Nuevo',
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1712271739/MetaStore/WhatsApp_Image_2024-04-04_at_5.14.23_PM__11_-removebg-preview_yejrth.png',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712271739/MetaStore/WhatsApp_Image_2024-04-04_at_5.14.23_PM__11_-removebg-preview_yejrth.png',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712271739/MetaStore/WhatsApp_Image_2024-04-04_at_5.14.23_PM__11_-removebg-preview_yejrth.png',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712271739/MetaStore/WhatsApp_Image_2024-04-04_at_5.14.23_PM__11_-removebg-preview_yejrth.png',
        },
      ],
      'stars': 2.7,
      'description': 'Peine plano de 2 piezas Peine alisador de peluquería Peine de peluquería Peine recto en forma de V Peine alisador (rojo, rosado)',
    },
    {
      'id': '12',
      'title': 'BodyCream',
      'name': 'GEL CALIENTE REDUCTOR PRESTIGE X 500',
      'brand': 'Bosley',
      'price': 17000,
      'oldPrice': 25000,
      'best': true,
      'featured': true,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1674774060/MetaStore/Gel-calient_iatyyl.jpg',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674774060/MetaStore/Gel-calient_iatyyl.jpg',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674774060/MetaStore/Gel-calient_iatyyl.jpg',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674774060/MetaStore/Gel-calient_iatyyl.jpg',
        },
      ],
      'stars': 5,
      'description': 'El gel anticelulitico reafirmante reductor bosley x 500g gracias a sus ingredientes naturales ayuda a mejorar la apariencia de la piel afectada por la celulitis, refrescando, suavizando y mejorando su elasticidad y firmeza. Ayuda a reducir medidas y moldear el cuerpo otorgando hidratación, flexibilidad y tonicidad.',
    },
  
    {
      'id': '13',
      'title': 'Tratamiento',
      'name': 'Tratamiento capilar Embriones de Pato',
      'brand': 'tvpresto',
      'price': 35000,
      'oldPrice': 39000,
      'best': false,
      'featured': true,
      'recommended': true,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1674775683/MetaStore/Tratamiento-capilar-EP_czwi1x.jpg',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674775683/MetaStore/Tratamiento-capilar-EP_czwi1x.jpg',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674775683/MetaStore/Tratamiento-capilar-EP_czwi1x.jpg',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674775683/MetaStore/Tratamiento-capilar-EP_czwi1x.jpg',
        },
      ],
      'stars': 2.5,
      'description': 'Ampolleta embrion de pato x 24 und x 12ml the Pearl collection, Tratamiento capilar intensivo a base de aceites naturales ideal para cabellos quïmicamente maltratados y sin brillo, enriquecido con extractos naturales, D-pantenol, karite y keratina.',
    },
    
    {
      'id': '14',
      'title': 'Talco',
      'name': 'Talco corporal ',
      'brand': 'BarberShop',
      'price': 19500,
      'oldPrice': 22000,
      'best': false,
      'featured': false,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1674775683/MetaStore/talco-corporal_m8fbaw.jpg',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674775683/MetaStore/talco-corporal_m8fbaw.jpg',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674775683/MetaStore/talco-corporal_m8fbaw.jpg',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674775683/MetaStore/talco-corporal_m8fbaw.jpg',
        },
      ],
      'stars': 5,
      'description': 'Efectivo tratamiento capilar para que luzcas un Cabello hidratado y revitalizado. Contiene cera de abejas y agacate tratamiento perfecto para revitalizar cabellos débiles ó quebradizos, tratados con permanentes, alisados, cepillados y tinturados. Caída*: caída por quiebre.',
    },
    {
      'id': '15',
      'title': 'Shampoo',
      'name': 'SHAMPOO SIN SALES FLOR DE CEREZO X 475 GR',
      'brand': 'The Pearl Colletions',
      'price': 16000,
      'oldPrice': 17000,
      'best': false,
      'featured': false,
      'recommended': true,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1712679902/MetaStore/PEAR0077_hldiwd.jpg',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712679907/MetaStore/PEAR0077-2_kgx03n.jpg',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712679907/MetaStore/PEAR0077-2_kgx03n.jpg',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712679918/MetaStore/PEAR0077-3_wzo7dw.jpg',
        },
      ],
      'stars': 3.5,
      'description': 'El shampoo sin sal flor de cerezo x 475g the Pearl collection es ideal para todo tipo de cabello. ayuda a reparar el cabello desde la raiz hasta las puntas, blinda el cabello del daño causado por los minerales del agua, sus nutrientes y extractos naturales son ideales para el cuidado y la salud de tu cabello. Con extracto de caléndula, romero y cebolla estimulan el crecimiento repara hidrata y nutre el cuero cabelludo previniendo así la aparición de la caspa o seborrea, limpia profundamente y elimina los excesos de grasa brindando mayor hidratación, previniendo la caída del cabello y estimulando su crecimiento.',
    },
    {
      'id': '16',
      'title': 'Polvo',
      'name': 'Polvo Compato ',
      'brand': 'BarberShop',
      'price': 15000,
      'oldPrice': 17000,
      'best': false,
      'featured': false,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1674775683/MetaStore/Polvo-compacto_qm3mgt.jpg',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674775683/MetaStore/Polvo-compacto_qm3mgt.jpg',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674775683/MetaStore/Polvo-compacto_qm3mgt.jpg',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674775683/MetaStore/Polvo-compacto_qm3mgt.jpg',
        },
      ],
      'stars': 4.7,
      'description': 'El polvo compacto translucido para hombres The Barbershop brinda ese toque final perfecto a la base y otros más productos cosméticos, brindando un efecto de color invisible e ingrávido, el cual brinda un acabo de apariencia natural en todo tipo de piel. Eliminando el aceite y el brillo sin acumulaciones innecesarias, este polvo para hombres totalmente translucido es increíblemente hidratante y trabaja incasablemente para secar todo el día, mientras que evita el caos y una apariencia fantasmal.',
    },
    {
      'id': '17',
      'title': 'Shampoo',
      'name': 'Shampoo Kids',
      'brand': 'BarberShop',
      'price': 21000,
      'oldPrice': 24000,
      'best': false,
      'featured': false,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1674775683/MetaStore/Shampoo-kids_ikwmho.jpg',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674775683/MetaStore/Shampoo-kids_ikwmho.jpg',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674775683/MetaStore/Shampoo-kids_ikwmho.jpg',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674775683/MetaStore/Shampoo-kids_ikwmho.jpg',
        },
      ],
      'stars': 2.7,
      'description': 'Shampoo Kids para cabello y cuerpo, con extractos naturales de caléndula, semilla de algodón, avena y aloe vera.',
    },
    {
      'id': '18',
      'title': 'Tratamiento',
      'name': 'Tratamiento Capilar PenTeou ',
      'brand': 'Kanechom',
      'price': 35000,
      'oldPrice': 42000,
      'best': false,
      'featured': true,
      'recommended': true,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1674775683/MetaStore/Penteou-all_yigaj1.png',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1711038424/MetaStore/peinado-crema-peinado_xdsp60.png',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1711038424/MetaStore/peinado-crema-peinado_xdsp60.png',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1711038424/MetaStore/peinado-crema-peinado_xdsp60.png',
        },
      ],
      'stars': 5,
      'description': 'La crema de peinar sin enjuague Penteou Kanechom debe dejarse en elcabello sin miedo a ser feliz, ya que no necesita enjuague. Además, tiene mil y un  usos, sus múltiples beneficios y versatilidad ofrecen a tu cabello todo lo que necesita en un solo producto.',
    },
    {
      'id': '19',
      'title': 'Peinilla',
      'name': 'Peinilla de Carbono',
      'brand': 'BarberShop',
      'price': 6000,
      'oldPrice': 8000,
      'best': false,
      'featured': false,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1674775683/MetaStore/Peinilla-carbono_fbtmaf.jpg',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674775683/MetaStore/Peinilla-carbono_fbtmaf.jpg',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674775683/MetaStore/Peinilla-carbono_fbtmaf.jpg',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674775683/MetaStore/Peinilla-carbono_fbtmaf.jpg',
        },
      ],
      'stars': 4.5,
      'description': 'Peine Peinilla Cabello Cola Metálica.',
    },
    {
      'id': '20',
      'title': 'BodyCream',
      'name': 'CREMA SATINADA X 120 GR',
      'brand': 'Bosley',
      'price': 21000,
      'oldPrice': 23000,
      'best': true,
      'featured': false,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1712617408/MetaStore/BOSL0044_xisrno.jpg',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712617408/MetaStore/BOSL0044_xisrno.jpg',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712617408/MetaStore/BOSL0044_xisrno.jpg',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712617408/MetaStore/BOSL0044_xisrno.jpg',
        },
      ],
      'stars': 3.2,
      'description': 'La crema satinada bosley x 120g es una formula ligera que al mismo tiempo hidrata y nutre a fondo, creando una película protectora, aportando un tono envidiable, perfeccionando la tez de los escotes, los hombros, la espalda, los brazos y las piernas, con suaves destellos nacarados que servirán para iluminar tu piel brindando un tono sensual hasta en las pieles más pálidas. También se puede utilizar para retener y realzar el bronceado de verano, proporcionando un delicioso aroma de vacaciones.',
    },
    {
      'id': '21',
      'title': 'Shampoo',
      'name': 'Shampoo Efecto Liso',
      'brand': 'Kanechom',
      'price': 35000,
      'oldPrice': 41500,
      'best': false,
      'featured': true,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1674775682/MetaStore/Kanechom-shampoo_js204m.jpg',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674775682/MetaStore/Kanechom-shampoo_js204m.jpg',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674775682/MetaStore/Kanechom-shampoo_js204m.jpg',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674775682/MetaStore/Kanechom-shampoo_js204m.jpg',
        },
      ],
      'stars': 2.1,
      'description': 'Principios activos: Queratina Vegetal, D – Pantenol y Complejo K. El Complejo K, un ingrediente activo innovador y completa tecnología Kanechom, proporciona una de forma inteligente, reemplazando proteínas y aminoácidos. Beneficios: Suavidad prolongada y disciplinada. Efecto blindaje y anti-frizz.',
    },
    
    {
      'id': '22',
      'title': 'Tratamiento',
      'name': 'Tratamiento capilar Di Vou',
      'brand': 'Kanechom',
      'price': 33000,
      'oldPrice': 41500,
      'best': false,
      'featured': false,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1674775682/MetaStore/Divou-leave_u5srij.jpg',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674775682/MetaStore/Divou-leave_u5srij.jpg',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674775682/MetaStore/Divou-leave_u5srij.jpg',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674775682/MetaStore/Divou-leave_u5srij.jpg',
        },
      ],
      'stars': 4.5,
      'description': 'La crema para peinar sin enjuague Divou Kanechom es un éxito ¡nutrición! Mucho brillo y suavidad, justo como tu cabello necesita. Increíble hidratación, mega reparación de puntas abiertas y remedio para el frizz. ¡Este es el producto que toda diva merece!',
    },
    
    {
      'id': '23',
      'title': 'BodyCream',
      'name': 'CREMA HUMECTANTE X 975 GR',
      'brand': 'The Pearl Colletions',
      'price': 23000,
      'oldPrice': 26000,
      'best': false,
      'featured': false,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1712675161/MetaStore/crem-humectante-975_hbcwuc.jpg',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712675161/MetaStore/crem-humectante-975_hbcwuc.jpg',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712675161/MetaStore/crem-humectante-975_hbcwuc.jpg',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674775682/MetaStore/Crema-humectant_pmhayc.jpg',
        },
      ],
      'stars': 3.5,
      'description': 'Crema humectante the pearl collection x 975g, para manos y cuerpo con colágeno, elastina y Q10; deja tu piel suave y muy hidratada sin dejar sensación grasosa ya que su fórmula está diseñada para que se absorba muy rápido en la piel y conserve su humedad natural. El extracto de las almendras humecta profundamente, combate la resequedad y devuelve la suavidad y elasticidad a la piel. Adecuada para tipo de pieles, normales, secas o mixtas.',
    },
    
    {
      'id': '24',
      'title': 'BodyCream',
      'name': 'Crema Exfoliante facial X 25O',
      'brand': 'The Pearl Colletions',
      'price': 25000,
      'oldPrice': 28000,
      'best': false,
      'featured': false,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1712675439/MetaStore/PEAR0068_tymicm.jpg',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712675440/MetaStore/PEAR0068-3_i0unlu.jpg',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712675542/MetaStore/PEAR0068-1_hfmugk.jpg',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712675441/MetaStore/PEAR0068-4_g7rrgj.jpg',
        },
      ],
      'stars': 3.5,
      'description': 'El exfoliante facial the Pearl collection x 250g elimina las células muertas e impurezas de la piel, dejándola renovada, suave y fresca. Tiene una consistencia cremosa y altamente humectante. Las semillas de albaricoque tienen propiedades antioxidantes y antiinflamatorias, Es ideal para todo tipo de piel..',
    },
        
    {
      'id': '25',
      'title': 'Waxes',
      'name': 'Cera Modeladora',
      'brand': 'BarberShop',
      'price': 17000,
      'oldPrice': 19500,
      'best': false,
      'featured': false,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1674775682/MetaStore/Cera-modeladora_horila.jpg',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674775682/MetaStore/Cera-modeladora_horila.jpg',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674775682/MetaStore/Cera-modeladora_horila.jpg',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674775682/MetaStore/Cera-modeladora_horila.jpg',
        },
      ],
      'stars': 3.5,
      'description': 'Con Keratina, biotina y pantenol, define, moldea y texturiza tu cabello.',
    },
    
    
    {
      'id': '26',
      'title': 'Tratamiento',
      'name': 'Tratamiento Capilar Chicle con Banana',
      'brand': 'Kanechom',
      'price': 34500,
      'oldPrice': 37000,
      'best': false,
      'featured': false,
      'recommended': true,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1674775681/MetaStore/Capillary-cond-4_vavlkj.jpg',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674775681/MetaStore/Capillary-cond-4_vavlkj.jpg',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674775681/MetaStore/Capillary-cond-4_vavlkj.jpg',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674775681/MetaStore/Capillary-cond-4_vavlkj.jpg',
        },
      ],
      'stars': 3.5,
      'description': 'La Mascarilla Hidratante Chiclé con Banana Kanechom es todo lo que siempre quisiste: ¡una fórmula grandilocuente que garantiza una nutrición maravillosa! ¡La fuerza y la hidratación del plátano para un cabello hermoso y un resultado increíble!',
    },
    
    
    {
      'id': '27',
      'title': 'Afeitadora',
      'name': 'Afeitadora Electrica',
      'brand': 'Lexus',
      'price': 28500,
      'oldPrice': 31000,
      'best': false,
      'featured': false,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1674775681/MetaStore/afeitadora-elect_lxfdad.jpg',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674775681/MetaStore/afeitadora-elect_lxfdad.jpg',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674775681/MetaStore/afeitadora-elect_lxfdad.jpg',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674775681/MetaStore/afeitadora-elect_lxfdad.jpg',
        },
      ],
      'stars': 3.5,
      'description': '- Limpieza y desvanecimiento. - Lámina Hipoalergénica. - Puede usarse en todas las direcciones de la piel. - Afeitado sin dolor y tirones. - Repuestos genéricos. - Diseño ligero y ergonómico. - Motor potente y silencioso. - Recargable por USB. - Hasta 60 minutos de funcionamiento inalámbrica.',
    },
    {
      'id': '28',
      'title': 'Aceite',
      'name': 'Aceite Barba',
      'brand': 'BarberShop',
      'price': 24000,
      'oldPrice': 27000,
      'best': false,
      'featured': false,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1674775681/MetaStore/Aceite-barba_f1vsay.jpg',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674775681/MetaStore/Aceite-barba_f1vsay.jpg',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674775681/MetaStore/Aceite-barba_f1vsay.jpg',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674775681/MetaStore/Aceite-barba_f1vsay.jpg',
        },
      ],
      'stars': 3.5,
      'description': 'Fórmula enriquecida con óleos. 100% vegetales. Textura leve. Desarrollado con aceites de semilla de maracayá. El Óleo hidratante otorga brillo, suavidad e hidratación inmediata. Ideal para suavizar y fortalecer la barba con aceite de maracuyá protección contra la resequedad, nutrición avanzada, brillo y luminosidad.',
    },
    
    
    {
      'id': '29',
      'title': 'Tratamiento',
      'name': 'TRATAMIENTO UVA FRUTOS X 24UND X SACHET 30 GR ',
      'brand': 'The Pearl Colletions',
      'price': 26000,
      'oldPrice': 29000,
      'best': false,
      'featured': false,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1674774134/MetaStore/tratamiento-capilar-fr_qe3g2w.jpg',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674774134/MetaStore/tratamiento-capilar-fr_qe3g2w.jpg',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674774134/MetaStore/tratamiento-capilar-fr_qe3g2w.jpg',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674774134/MetaStore/tratamiento-capilar-fr_qe3g2w.jpg',
        },
      ],
      'stars': 3.5,
      'description': 'El tratamiento capilar multireparador antioxidante con extracto de uva y frutos rojos x 24 und en sachet x 30g the Pearl collection es ideal para cabellos muy maltratados ya que su fórmula avanzada y sus ingredientes activos, extracto de frutos rojos y uva, reparan, rejuvenecen y revitalizan la fibra capilar desde la raíz hasta las puntas, dejando el cabello suave, reparado y con una apariencia increíble.',
    },
    {
      'id': '30',
      'title': 'Tratamiento',
      'name': 'Tratamiento Capilar con Biotina',
      'brand': 'The Pearl Colletions',
      'price': 42000,
      'oldPrice': 46000,
      'best': false,
      'featured': false,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1674774134/MetaStore/tratamiento-capilar_qudt69.jpg',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674774134/MetaStore/tratamiento-capilar_qudt69.jpg',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674774134/MetaStore/tratamiento-capilar_qudt69.jpg',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674774134/MetaStore/tratamiento-capilar_qudt69.jpg',
        },
      ],
      'stars': 3.5,
      'description': 'La biotina the Pearl collection x 24und x5ml ofrece un tratamiento completo, fusionando todos los secretos que esconde la naturaleza ahora están a tu alcance para evitar la caída prematura del cabello, este es un tratamiento intensivo que actúa desde el cuero cabelludo fortaleciendo el cabello desde la raíz. Esta línea anti caída esta diseñada para uso profesional y uso personal, ideal para prevenir la caída del cabello, y estimular el crecimiento de cabello más fuerte y sano.',
    },
    {
      'id': '31',
      'title': 'Tratamiento',
      'name': 'Tratamiento Capilar con aceite de Argan',
      'brand': 'The Pearl Colletions',
      'price': 42000,
      'oldPrice': 46000,
      'best': false,
      'featured': false,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1674774134/MetaStore/tratamiento-capilar-ar_xiw2he.jpg',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674774134/MetaStore/tratamiento-capilar-ar_xiw2he.jpg',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674774134/MetaStore/tratamiento-capilar-ar_xiw2he.jpg',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674774134/MetaStore/tratamiento-capilar-ar_xiw2he.jpg',
        },
      ],
      'stars': 3.5,
      'description': 'Tratamiento capilar de argán x 24und x 5ml the Pearl collection, restaura notablemente el brillo del cabello, protege del calor, desenreda, suaviza y ayuda a reparar las puntas abiertas, este es un tratamiento intensivo que actúa desde el cuero cabelludo fortaleciendo el cuero cabelludo desde la raíz. Ideal para cabellos secos, maltratados y sin brillo.',
    },
    
    {
      'id': '32',
      'title': 'Shampoo',
      'name': 'Shampoo Efecto Liso',
      'brand': 'Kanechom',
      'price': 32500,
      'oldPrice': 36000,
      'best': false,
      'featured': false,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1712675958/MetaStore/crema-de-peinado-sin-efecto-suave-de-enjuague_jkda7n.png',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712675963/MetaStore/crema-de-peinado-sin-efecto-suave-de-enjuague_1_zsvf8a.jpg',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674774095/MetaStore/kanechom-shampoo-EL_qckcru.jpg',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712675963/MetaStore/crema-de-peinado-sin-efecto-suave-de-enjuague_1_zsvf8a.jpg',
        },
      ],
      'stars': 3.5,
      'description': 'La crema sin enjuague Kanechom Smooth Effect promueve la peinabilidad, la sensación de suavidad y el efecto anti-frizz. La Queratina Vegetal y el D - Pantenol dejan el cabello disciplinado, promoviendo un cabello suave por más tiempo. El Complejo K, un ingrediente activo innovador y completa tecnología Kanechom, proporciona una de forma inteligente, reemplazando proteínas y aminoácidos.',
    },
    {
      'id': '33',
      'title': 'Shampoo',
      'name': 'Shampoo Kids',
      'brand': 'Kanechom',
      'price': 26000,
      'oldPrice': 29500,
      'best': false,
      'featured': false,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1711038407/MetaStore/champu-para-ninos_gzckaz.png',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1711038407/MetaStore/champu-para-ninos_gzckaz.png',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1711038407/MetaStore/champu-para-ninos_gzckaz.png',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1711038407/MetaStore/champu-para-ninos_gzckaz.png',
        },
      ],
      'stars': 3.5,
      'description': 'Kanechom Kids Protein Shampoo con fórmula balanceada es tan suave que no irrita el cuero cabelludo, la piel y los ojos y se puede usar todos los días, dejando el cabello suave, brillante y fácil de peinar además de delicadamente perfumado. Se recomienda para todo tipo de cabello. Probado y aprobado bajo control dermatológico.',
    },
    
  
    {
      'id': '34',
      'title': 'Shampoo',
      'name': 'Shampoo sin sal',
      'brand': 'Bosley',
      'price': 37000,
      'oldPrice': 41000,
      'best': false,
      'featured': false,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1674774094/MetaStore/shampoo-sin-sal_dkgseg.jpg',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674774094/MetaStore/shampoo-sin-sal_dkgseg.jpg',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674774094/MetaStore/shampoo-sin-sal_dkgseg.jpg',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674774094/MetaStore/shampoo-sin-sal_dkgseg.jpg',
        },
      ],
      'stars': 3.5,
      'description': 'Shampoo bosley x 4000 ml es una Fórmula ideal para todo tipo de cabello. Ayuda a reparar el cabello hasta el interior y blinda contra el daño causado por los minerales de agua, sus nutrientes y extractos naturales son ideal para restaurar y mantener la salud del cabello. Un shampoo esencial para el cuidado y protección del cabello. Ya que sus extractos de caléndula, cebolla y romero estimulan el crecimiento, repara, hidrata y nutre el cabello previniendo así la aparición de caspa y seborrea; limpia profundamente y elimina los excesos de grasa brindando mayor hidratación, previene la caída y estimula el crecimiento del cabello.',
    },
    {
      'id': '35',
      'title': 'BodyCream',
      'name': 'GEL CALMANTE MUSCULAR X 300 GR',
      'brand': 'The Pearl Colletions',
      'price': 24000,
      'oldPrice': 28500,
      'best': false,
      'featured': false,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1712676190/MetaStore/PEAR0097_ho0o6r.jpg',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712676192/MetaStore/PEAR0097-2_nsjg4l.jpg',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712676191/MetaStore/PEAR0097-1_ar3aoo.jpg',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712676195/MetaStore/PEAR0097-3_zw2mkl.jpg',
        },
      ],
      'stars': 3.5,
      'description': 'El gel calmante muscular the Pearl collection x 300g ayuda a liberar la tensión muscular y relajar. El gel caliente esta hecho a base de extractos naturales como el aceite de semillas de cannabis, pronto alivio, caléndula, castaño de indias, que ayudan a tratar los dolores musculares, y de articulaciones provocados por enfermedades degenerativas de los músculos o lesiones ocasionadas por actividades diarias.',
    },
    {
      'id': '36',
      'title': 'BodyCream',
      'name': 'Gel Frio Anti-Estrias',
      'brand': 'Bosley',
      'price': 25500,
      'oldPrice': 28500,
      'best': false,
      'featured': false,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1674774060/MetaStore/Gel-frio-antic_zudg5m.jpg',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674774060/MetaStore/Gel-frio-antic_zudg5m.jpg',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674774060/MetaStore/Gel-frio-antic_zudg5m.jpg',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674774060/MetaStore/Gel-frio-antic_zudg5m.jpg',
        },
      ],
      'stars': 3.5,
      'description': 'Donec tellus massa, tristique sit amet condim vel, facilisis quis sapien. Praesent id engmin rae sitf amet odio vulputate eleifend in in tortor. Sellus massa, tristique it amet cond coim vel, faci lisis rae Facilisis quis sapien. Praesent id enim sit amet odio vulputatefi.',
    },
    {
      'id': '37',
      'title': 'BodyCream',
      'name': 'GEL HIDRATANTE AFTER SUN ALOE VERA',
      'brand': 'The Pearl Colletions',
      'price': 15000,
      'oldPrice': 17500,
      'best': false,
      'featured': false,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1712676500/MetaStore/Sin-t%C3%ADtulo-1_FnzQinM_1_n2osvn.jpg',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712676478/MetaStore/BOSL0034-3_lJS2OjB_ytpagq.jpg',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712676480/MetaStore/BOSL0034-4_TRnSs13_xabtmw.jpg',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712676477/MetaStore/BOSL0034-1_Wg3jp0g_atdtxx.jpg',
        },
      ],
      'stars': 3.5,
      'description': 'gel hidratante after sun x275g, es un gel multi beneficio que nutre, limpia, pule y suaviza la piel, enriquecido con nutrientes naturales como la caléndula, aloe, filtro solar, gracias a sus propiedades antinflamatorias y analgésicas actúa como bio regenerador celular con propiedades refrescantes y calmantes, de rápida absorción, puede usarse después de tener la piel expuesta al sol, o sobre la piel irritada por el afeitado, depilación o quemaduras. Con una textura suave y no grasa ayuda a proteger y mantener la tersura, suavidad y elasticidad de la piel.',
    },
    {
      'id': '38',
      'title': 'Beard',
      'name': 'GEL AFEITAR',
      'brand': 'Barbershop',
      'price': 14000,
      'oldPrice': 19000,
      'best': false,
      'featured': false,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1712676714/MetaStore/GEL-DE-AFEITAR_z2gsst.jpg',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712676665/MetaStore/GEL-AFEITAR-2502_5ravMFw_eq2ypv.jpg',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712676710/MetaStore/GEL-AFEITAR-2503_aZTbZzz_qhkjiq.jpg',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712676712/MetaStore/GEL-AFEITAR-2504_zvpoABM_xaxqel.jpg',
        },
      ],
      'stars': 3.5,
      'description': 'El gel para afeitar the barbershop for men x 250ml es una formula enriquecida con áloe vera y vitamina E, está diseñado para facilitar el afeitado mejorando el deslizamiento de la cuchilla, protegiendo la piel de la irritación y posibles cortes. no contiene alcohol.',
    },
    {
      'id': '39',
      'title': 'BodyCream',
      'name': 'Crema exfoliante de chocolate',
      'brand': 'Bosley',
      'price': 27000,
      'oldPrice': 32000,
      'best': false,
      'featured': false,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1674774044/MetaStore/Crema-ex-choco2_solzxb.jpg',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674774044/MetaStore/Crema-ex-choco2_solzxb.jpg',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674774044/MetaStore/Crema-ex-choco2_solzxb.jpg',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674774044/MetaStore/Crema-ex-choco2_solzxb.jpg',
        },
      ],
      'stars': 3.5,
      'description': 'La crema exfoliante postre de chocolate x 1000ml bosley para manos y cuerpo, es una crema humectante que está recomendada para el cuidado y protección de la piel. Sus gránulos exfoliantes eliminan las células muertas; la elastina y el Karité, nutren y suavizan la piel. El postre de chocolate hidrata y exfolia tiene gránulos exfoliantes de semillas de albaricoque que es reconocido por sus poder antioxidante y antinflamatorios, además de sus propiedades humectantes y suavizantes, el chocolate brinda a la piel mucha hidratación y una sensación de relajación.',
    },
    {
      'id': '40',
      'title': 'BodyCream',
      'name': 'Crema Exfoliante de Fresa',
      'brand': 'Bosley',
      'price': 22000,
      'oldPrice': 26500,
      'best': false,
      'featured': false,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1674774044/MetaStore/Crema-ex-fres_jiajhz.jpg',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674774044/MetaStore/Crema-ex-fres_jiajhz.jpg',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674774044/MetaStore/Crema-ex-fres_jiajhz.jpg',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674774044/MetaStore/Crema-ex-fres_jiajhz.jpg',
        },
      ],
      'stars': 3.5,
      'description': 'La crema exfoliante postre de fresa x 1000 ml bosley para manos y cuerpo, es una crema humectante que está recomendada para el cuidado y protección de la piel. Sus gránulos exfoliantes eliminan las células muertas; la elastina y el Karité, nutren y suavizan la piel. El postre de fresa hidrata y exfolia tiene gránulos exfoliantes de semillas de albaricoque que es reconocido por sus poder antioxidante y antinflamatorios, además de sus propiedades humectantes y suavizantes.',
    },
    {
      'id': '41',
      'title': 'BodyCream',
      'name': 'CREMA EXFOLIANTE NARANJA',
      'brand': 'Bosley',
      'price': 16000,
      'oldPrice': 21500,
      'best': false,
      'featured': false,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1712677101/MetaStore/NARANJA_wwhpk0.jpg',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712677116/MetaStore/BOSL0040-1_gyd4z3.jpg',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712677124/MetaStore/BOSL0040-2_gibmdq.jpg',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712677126/MetaStore/BOSL0040-4_ihlbtc.jpg',
        },
      ],
      'stars': 3.5,
      'description': 'La crema exfoliante postre de Naranja x 1000 ml bosley para manos y cuerpo, es una crema humectante que está recomendada para el cuidado y protección de la piel. Sus gránulos exfoliantes eliminan las células muertas; la elastina y el Karité, nutren y suavizan la piel. El postre de fresa hidrata y exfolia tiene gránulos exfoliantes de semillas de albaricoque que es reconocido por sus poder antioxidante y antinflamatorios, además de sus propiedades humectantes y suavizantes.',
    },
    
    {
      'id': '42',
      'title': 'Peines',
      'name': 'Estuche de Peines',
      'brand': 'The Pearl Colletions',
      'price': 18500,
      'oldPrice': 22000,
      'best': false,
      'featured': false,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1674773999/MetaStore/Estuche-peines_gvrnrh.jpg',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674773999/MetaStore/Estuche-peines_gvrnrh.jpg',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674773999/MetaStore/Estuche-peines_gvrnrh.jpg',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674773999/MetaStore/Estuche-peines_gvrnrh.jpg',
        },
      ],
      'stars': 3.5,
      'description': 'Donec tellus massa, tristique sit amet condim vel, facilisis quis sapien. Praesent id engmin rae sitf amet odio vulputate eleifend in in tortor. Sellus massa, tristique it amet cond coim vel, faci lisis rae Facilisis quis sapien. Praesent id enim sit amet odio vulputatefi.',
    },
    {
      'id': '43',
      'title': 'Cepillo',
      'name': 'Cepillo para planchados',
      'brand': 'BarberShop',
      'price': 15000,
      'oldPrice': 18000,
      'best': false,
      'featured': false,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1674773999/MetaStore/Cepillo-axi_credom.jpg',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674773999/MetaStore/Cepillo-axi_credom.jpg',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674773999/MetaStore/Cepillo-axi_credom.jpg',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674773999/MetaStore/Cepillo-axi_credom.jpg',
        },
      ],
      'stars': 3.5,
      'description': 'Donec tellus massa, tristique sit amet condim vel, facilisis quis sapien. Praesent id engmin rae sitf amet odio vulputate eleifend in in tortor. Sellus massa, tristique it amet cond coim vel, faci lisis rae Facilisis quis sapien. Praesent id enim sit amet odio vulputatefi.',
    },
    {
      'id': '44',
      'title': 'Peinilla',
      'name': 'Peinilla para Planchar',
      'brand': 'BarberShop',
      'price': 19500,
      'oldPrice': 23000,
      'best': false,
      'featured': false,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1674773999/MetaStore/peinilla-planchar_skpi1h.jpg',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674773999/MetaStore/peinilla-planchar_skpi1h.jpgg',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674773999/MetaStore/peinilla-planchar_skpi1h.jpg',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674773999/MetaStore/peinilla-planchar_skpi1h.jpg',
        },
      ],
      'stars': 3.5,
      'description': 'Donec tellus massa, tristique sit amet condim vel, facilisis quis sapien. Praesent id engmin rae sitf amet odio vulputate eleifend in in tortor. Sellus massa, tristique it amet cond coim vel, faci lisis rae Facilisis quis sapien. Praesent id enim sit amet odio vulputatefi.',
    },
    {
      'id': '45',
      'title': 'Papel',
      'name': 'Papel-Termoreductor',
      'brand': 'Bosley',
      'price': 15500,
      'oldPrice': 18000,
      'best': false,
      'featured': false,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1674773999/MetaStore/papel-termoreductor_gahpmm.jpg',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674773999/MetaStore/papel-termoreductor_gahpmm.jpg',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674773999/MetaStore/papel-termoreductor_gahpmm.jpg',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674773999/MetaStore/papel-termoreductor_gahpmm.jpg',
        },
      ],
      'stars': 3.5,
      'description': 'Donec tellus massa, tristique sit amet condim vel, facilisis quis sapien. Praesent id engmin rae sitf amet odio vulputate eleifend in in tortor. Sellus massa, tristique it amet cond coim vel, faci lisis rae Facilisis quis sapien. Praesent id enim sit amet odio vulputatefi.',
    },
    {
      'id': '46',
      'title': 'Atomizador',
      'name': 'Atomizador Secador',
      'brand': 'Bosley',
      'price': 12000,
      'oldPrice': 15000,
      'best': false,
      'featured': false,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1674773999/MetaStore/Atomizador-t2_e3bjp1.jpg',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674773999/MetaStore/Atomizador-t2_e3bjp1.jpg',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674773999/MetaStore/Atomizador-t2_e3bjp1.jpg',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674773999/MetaStore/Atomizador-t2_e3bjp1.jpg',
        },
      ],
      'stars': 3.5,
      'description': 'Donec tellus massa, tristique sit amet condim vel, facilisis quis sapien. Praesent id engmin rae sitf amet odio vulputate eleifend in in tortor. Sellus massa, tristique it amet cond coim vel, faci lisis rae Facilisis quis sapien. Praesent id enim sit amet odio vulputatefi.',
    },
    {
      'id': '47',
      'title': 'Polvo',
      'name': 'Polvo Compacto',
      'brand': 'BarberShop',
      'price': 17500,
      'oldPrice': 21000,
      'best': false,
      'featured': false,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1712008198/MetaStore/POLVO-COMPACTO-UND_mK9Mxvw_rj2b3j.jpg',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712008198/MetaStore/POLVO-COMPACTO-UND_mK9Mxvw_rj2b3j.jpg',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712008198/MetaStore/POLVO-COMPACTO-UND_mK9Mxvw_rj2b3j.jpg',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712008198/MetaStore/POLVO-COMPACTO-UND_mK9Mxvw_rj2b3j.jpg',
        },
      ],
      'stars': 3.5,
      'description': 'Donec tellus massa, tristique sit amet condim vel, facilisis quis sapien. Praesent id engmin rae sitf amet odio vulputate eleifend in in tortor. Sellus massa, tristique it amet cond coim vel, faci lisis rae Facilisis quis sapien. Praesent id enim sit amet odio vulputatefi.',
    },
    
   {
      'id': '48',
      'title': 'StylingCream',
      'name': 'Crema de peinar Unicornio',
      'brand': 'Kanechom',
      'price': 28000,
      'oldPrice': 30000,
      'best': false,
      'featured': false,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1711038431/MetaStore/unicornio_swfay6.png',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1711038431/MetaStore/unicornio_swfay6.png',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1711038431/MetaStore/unicornio_swfay6.png',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1711038431/MetaStore/unicornio_swfay6.png',
        },
      ],
      'stars': 3.5,
      'description': 'La Crema Para Peinar Kanechom Unicornio fue desarrollada para mantener el cabello hidratado y los reflejos resaltados, además de proporcionar esa Mega definición que nos encanta.',
    },
    {
      'id': '49',
      'title': 'StylingCream',
      'name': 'Crema de peinar Unicornio con Gliter',
      'brand': 'Kanechom',
      'price': 35000,
      'oldPrice': 38500,
      'best': false,
      'featured': false,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1711038418/MetaStore/gliter_kz3nyy.png',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1711038418/MetaStore/gliter_kz3nyy.png',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1711038418/MetaStore/gliter_kz3nyy.png',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1711038418/MetaStore/gliter_kz3nyy.png',
        },
      ],
      'stars': 3.5,
      'description': 'La Crema Para Peinar Kanechom Unicornio fue desarrollada para mantener el cabello hidratado y los reflejos resaltados, además de proporcionar esa Mega definición que nos encanta.',
    },
    
    {
      'id': '50',
      'title': 'Tratamiento',
      'name': 'Power Cachos 3x1',
      'brand': 'Kanechon',
      'price': 41500,
      'oldPrice': 45000,
      'best': false,
      'featured': false,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1711038428/MetaStore/power-curls-3x1_h7xkx6.png',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1711038428/MetaStore/power-curls-3x1_h7xkx6.png',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1711038428/MetaStore/power-curls-3x1_h7xkx6.png',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1711038428/MetaStore/power-curls-3x1_h7xkx6.png',
        },
      ],
      'stars': 3.5,
      'description': 'La línea #POWERCACHOS Kanechom tiene una fórmula exclusiva desarrollada con aceite de coco y aloe, activos altamente hidratantes, para tratar tus curvas con mimo y amor, dejando tus rizos increíbles, suaves y definidos. ¡Esta línea es poder! Rica en proteína de suero, que fortalece y acelera el crecimiento del cabello.',
    },
    {
      'id': '51',
      'title': 'Tratamiento',
      'name': 'Kit Power Cachos',
      'brand': 'Kanechom',
      'price': 40000,
      'oldPrice': 42000,
      'best': false,
      'featured': false,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1711038427/MetaStore/power-cachos_rvalcc.png',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1711038427/MetaStore/power-cachos_rvalcc.png',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1711038427/MetaStore/power-cachos_rvalcc.png',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1711038427/MetaStore/power-cachos_rvalcc.png',
        },
      ],
      'stars': 3.5,
      'description': 'La línea #POWERCACHOS de Kanechom cuenta con una fórmula exclusiva, desarrollada con aceite de coco y aloe vera, activos altamente hidratantes, para tratar tus curvas con mimo y amor, dejando tus rizos increíbles, suaves y definidos. ¡Esta línea es poder! Rico en proteína de suero, que fortalece y acelera el crecimiento del cabello.',
    },
    {
      'id': '52',
      'title': 'StylingCream',
      'name': 'Crema de peinar La Crou',
      'brand': 'Kanechon',
      'price': 35000,
      'oldPrice': 42000,
      'best': false,
      'featured': false,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1711038425/MetaStore/peinado-crema-sellado_nx6bjh.png',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1711038425/MetaStore/peinado-crema-sellado_nx6bjh.png',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1711038425/MetaStore/peinado-crema-sellado_nx6bjh.png',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1711038425/MetaStore/peinado-crema-sellado_nx6bjh.png',
        },
      ],
      'stars': 3.5,
      'description': 'La crema para peinar sin enjuague Lacrou Kanechom es ideal para potenciar Los rizos y dan un impulso extra de volumen. Potencia tus rizos, dale eso definición que necesita, además de favorecer la suavidad y el brillo.',
    },
    {
      'id': '53',
      'title': 'Tratamiento',
      'name': 'Manteca de Karite Restauracion Total',
      'brand': 'Kanechom',
      'price': 35000,
      'oldPrice': 38000,
      'best': false,
      'featured': false,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1711038423/MetaStore/manteca-de-karite-de-restauracion-total_xf3z3m.png',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1711038423/MetaStore/manteca-de-karite-de-restauracion-total_xf3z3m.png',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1711038423/MetaStore/manteca-de-karite-de-restauracion-total_xf3z3m.png',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1711038423/MetaStore/manteca-de-karite-de-restauracion-total_xf3z3m.png',
        },
      ],
      'stars': 3.5,
      'description': 'Kanechom Total Restoration Conditioning Crema Hidratante tiene en su fórmula Manteca de Karité y Queratina Hidrolizada que promueven la hidratación, acondicionamiento y suavidad al cabello, devolviendo la grasa natural a las hebras, recuperando brillo y vitalidad.',
    },
    {
      'id': '54',
      'title': 'Tratamiento',
      'name': 'Mascarilla acondisionante Chicle con Banana',
      'brand': 'Kanechom',
      'price': 65,
      'oldPrice': 110,
      'best': false,
      'featured': false,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1711038420/MetaStore/kanechom-hair-mask-chicle-gum-banana_zv01jw.png',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1711038420/MetaStore/kanechom-hair-mask-chicle-gum-banana_zv01jw.png',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1711038420/MetaStore/kanechom-hair-mask-chicle-gum-banana_zv01jw.png',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1711038420/MetaStore/kanechom-hair-mask-chicle-gum-banana_zv01jw.png',
        },
      ],
      'stars': 3.5,
      'description': 'La Mascarilla Hidratante Chiclé con Banana Kanechom es todo lo que siempre quisiste: ¡una fórmula grandilocuente que garantiza una nutrición maravillosa! ¡La fuerza y la hidratación del plátano para un cabello hermoso y un resultado increíble!',
    },
    {
      'id': '55',
      'title': 'Tratamiento',
      'name': 'Fortificación de Jaborandi',
      'brand': 'Kanechom',
      'price': 32000,
      'oldPrice': 36000,
      'best': false,
      'featured': false,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1711038415/MetaStore/fortificando-jaborandi_evemcy.png',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1711038415/MetaStore/fortificando-jaborandi_evemcy.png',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1711038415/MetaStore/fortificando-jaborandi_evemcy.png',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1711038415/MetaStore/fortificando-jaborandi_evemcy.png',
        },
      ],
      'stars': 3.5,
      'description': 'Kanechom Crema Capilar Acondicionadora Fortificante, a base de rico extracto vegetal, suaviza el cabello favoreciendo el fortalecimiento de las hebras, además de hidratar el cabello aportando brillo natural.',
    },
    {
      'id': '56',
      'title': 'Locion refrescante',
      'name': 'LOCION REFRESCANTE BARBERSHOP',
      'brand': 'BarberShop',
      'price': 23000,
      'oldPrice': 26500,
      'best': false,
      'featured': false,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1712008197/MetaStore/locion_wnb87p.jpg',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712008197/MetaStore/locion_wnb87p.jpg',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712008197/MetaStore/locion_wnb87p.jpg',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712008197/MetaStore/locion_wnb87p.jpg',
        },
      ],
      'stars': 3.5,
      'description': 'loción refrescante antibacterial the barbershop x 250ml for men para después de la afeitada refresca y suaviza la piel, evita que la piel se irrite después de la rasurada, esta fórmula es a base de alcohol eucalipto y mentol, es una loción desinfectante y antibacterial que también se puede usar para refrescar la piel y como repelente.',
    },
    {
      'id': '57',
      'title': 'Minoxidil',
      'name': 'MINOXIDIL THE BARBERSHOP',
      'brand': 'BarberShop',
      'price': 56000,
      'oldPrice': 60000,
      'best': false,
      'featured': false,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1712008193/MetaStore/minoxiidl_w8pzqn.jpg',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712008193/MetaStore/minoxiidl_w8pzqn.jpg',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712008193/MetaStore/minoxiidl_w8pzqn.jpg',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712008193/MetaStore/minoxiidl_w8pzqn.jpg',
        },
      ],
      'stars': 3.5,
      'description': 'El minoxidil the barbershop for men x 120ml tiene una concentración de 5 % de mxd, es una molécula que penetra los folículos, para que produzcan finos vellos que con el tiempo se van desarrollando, además acelera las etapas del bello común, logrando que crezcan y logren grosor mucho más rápido de lo normal. Por lo que no solo es útil para las personas lampiñas o de poco vello facial, si no también si no para los que desean una barba más abundante, gruesa y poblada. Sin olor y fácil aplicación.',
    },
    {
      'id': '58',
      'title': 'Balsamo',
      'name': 'BALSAMO BARBERSHOP',
      'brand': 'BarberShop',
      'price': 41000,
      'oldPrice': 46000,
      'best': false,
      'featured': false,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1712008193/MetaStore/BALSAMO_4_LITROS_1_jDNvkDV_njanft.jpg',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712008193/MetaStore/BALSAMO_4_LITROS_1_jDNvkDV_njanft.jpg',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712008193/MetaStore/BALSAMO_4_LITROS_1_jDNvkDV_njanft.jpg',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712008193/MetaStore/BALSAMO_4_LITROS_1_jDNvkDV_njanft.jpg',
        },
      ],
      'stars': 3.5,
      'description': 'El bálsamo the barbershop for men x 4000 ml Es un tratamiento repolarizado, con extractos naturales que aportan brillo, suavidad, protección y acondiciona el cabello. Contiene aceites esenciales que lubrican fortifican y engrosan el cabello.',
    },
    {
      'id': '59',
      'title': 'Waxes',
      'name': 'Cera moldeadora y fijadora  X190G',
      'brand': 'BarberShop',
      'price': 27000,
      'oldPrice': 32000,
      'best': false,
      'featured': false,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1712008189/MetaStore/CERA-TRADICIONAL1_gQz4e9X_asajxv.jpg',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712008189/MetaStore/CERA-TRADICIONAL1_gQz4e9X_asajxv.jpg',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712008189/MetaStore/CERA-TRADICIONAL1_gQz4e9X_asajxv.jpg',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712008189/MetaStore/CERA-TRADICIONAL1_gQz4e9X_asajxv.jpg',
        },
      ],
      'stars': 3.5,
      'description': 'La cera moldeadora y fijadora the barbershop x 190g Facilita el peinado, ayuda a tener un peinado definido libre de frizz, no deja sensación grasosa o acartonado, con Biotina, Vitamina E, Filtro solar, silicona y pantenol. Libre de Parabenos. La cera the barbershop es ideal para todo tipo de cabello, define, moldea y texturiza.',
    },
    {
      'id': '60',
      'title': 'Waxes',
      'name': 'Cera moldeadora y fijadora X190G',
      'brand': 'BarberShop',
      'price': 27000,
      'oldPrice': 32000,
      'best': false,
      'featured': false,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1712008184/MetaStore/CERA-CX1_JFNZnvw_sntzm5.jpg',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712008184/MetaStore/CERA-CX1_JFNZnvw_sntzm5.jpg',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712008184/MetaStore/CERA-CX1_JFNZnvw_sntzm5.jpg',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712008184/MetaStore/CERA-CX1_JFNZnvw_sntzm5.jpg',
        },
      ],
      'stars': 3.5,
      'description': 'La cera moldeadora y fijadora cx x 190g the barbershop for men Previene la caída del cabello. Otorga fijación y definición a tu peinado, a la vez lo revitaliza y acondiciona. Contiene ceramidas vegetales que ayudan a mantener la elasticidad del cuero cabelludo y del cabello. Por sus componentes activos de aceite de semilla de girasol y aceite de soja es ideal para cabellos secos, gracias a sus propiedades humectantes e hidratantes.',
    },
    {
      'id': '61',
      'title': 'Waxes',
      'name': 'CERA BLACK BARBERSHOP X 190G',
      'brand': 'BarberShop',
      'price': 32000,
      'oldPrice': 36000,
      'best': false,
      'featured': false,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1712008184/MetaStore/CERA-BLACK1_iGjOjts_xuuz4t.jpg',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712008184/MetaStore/CERA-BLACK1_iGjOjts_xuuz4t.jpg',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712008184/MetaStore/CERA-BLACK1_iGjOjts_xuuz4t.jpg',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712008184/MetaStore/CERA-BLACK1_iGjOjts_xuuz4t.jpg',
        },
      ],
      'stars': 3.5,
      'description': 'La cera black the barbershop x 190g es una cera tipo gel, que moldea y texturiza el cabello, ayuda matizar, disimular las canas e intensifica la tonalidad, ya que la cera aporta color negro al cabello. Contiene coco que es conocido por sus propiedades hidratantes y nutritivas, además aporta brillo y suavidad, sin dejar el pelo graso. Por otra parte, también protege la fibra capilar evitando la rotura del cabello y aportándole fuerza',
    },
    {
      'id': '62',
      'title': 'Cosmetics',
      'name': 'PRIMER MAKEUP ULTRALUXE',
      'brand': 'Bosley',
      'price': 28000,
      'oldPrice': 36000,
      'best': false,
      'featured': false,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1712008183/MetaStore/BOSL0155-B_wtf1bl.jpg',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712008183/MetaStore/BOSL0155-B_wtf1bl.jpg',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712008183/MetaStore/BOSL0155-B_wtf1bl.jpg',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712008183/MetaStore/BOSL0155-B_wtf1bl.jpg',
        },
      ],
      'stars': 3.5,
      'description': 'El primer makeup ultra luxe es una pre base ideal para acondicionar la piel y que estÃ© preparada a la hora de aplicar los demÃ¡s productos, El primer de maquillaje suaviza la piel, reduce visiblemente las arrugas o los poros, disimula las marcas de acnÃ© y otras imperfecciones que se puedan tener. El uso del primer tambiÃ©n juega un papel fundamental a la hora de dar mayor duraciÃ³n al maquillaje; gracias a su fÃ³rmula en gel es ideal para todo tipo de piel especialmente para las personas con piel grasa.',
    },
    {
      'id': '63',
      'title': 'Cosmetics',
      'name': 'MANTEQUILLA CORPORAL BOSLEY X185G',
      'brand': 'Bosley',
      'price': 37000,
      'oldPrice': 34000,
      'best': false,
      'featured': false,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1712678565/MetaStore/PADRE_1Wke67A_zzy00p.jpg',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712678592/MetaStore/AMBER_x5qxiv.jpg',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712678593/MetaStore/COCO_ok8eh4.jpg',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712678600/MetaStore/toditas_akqg37.jpg',
        },
      ],
      'stars': 3.5,
      'description': 'La mantequilla ultra hidratante bosley x185g ha sido creada para brindar a tu piel alta hidratación, nutrición, y suavidad profunda, con ingredientes naturales como la manteca de cacao y karite, aceite de coco y derivados de oliva, que son conocidos por sus excelentes beneficios para tener una piel sana e hidratada profundamente, en combinación con un activo antibacterial que permite protegerte de los factores externos del medio ambiente. La mantequilla corporal bosley aparte de brindar a la piel una hidratación profunda aporta finos destellos con shimmer dejando la piel con un aspecto y una fragancia irresistible.',
    },
    {
      'id': '64',
      'title': 'Cosmetics',
      'name': 'Avon 5 En 1 Lash Genius Mascara Multibeneficios Para Pestañas - 10 ml',
      'brand': 'Avon',
      'price': 32000,
      'oldPrice': 36000,
      'best': false,
      'featured': false,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1712182644/MetaStore/Pesta%C3%B1ida-2_5en1_wkg3kx.png',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712182643/MetaStore/Pesta%C3%B1ina-5en1_o5jgnv.png',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712182644/MetaStore/Pesta%C3%B1ida-2_5en1_wkg3kx.png',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712182644/MetaStore/Pesta%C3%B1ida-2_5en1_wkg3kx.png',
        },
      ],
      'stars': 3.5,
      'description': 'Cepillo multiacción separa y maquilla cada pestaña. Su punta atiende cada detalle. Fórmula liviana. Fácil de remover. Ultrapigmentada. Color intenso. Cubre las pestañas de raíz a punta, de esquina a esquina sin dejar grumos. Beneficios basados en estudios clínicos y de percepción de consumidores.',
    },
    {
      'id': '65',
      'title': 'Cosmetics',
      'name': 'Avon Unlimited Mascara Para Pestañas - 10 g',
      'brand': 'Avon',
      'price': 23000,
      'oldPrice': 28000,
      'best': false,
      'featured': false,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1712688405/MetaStore/prod_1204107_1_lkwj45.jpg',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712688405/MetaStore/prod_1204107_1_lkwj45.jpg',
        },
        {
          'sku': 'v2SmiuNbZ9',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712688405/MetaStore/prod_1204107_1_lkwj45.jpg',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712688405/MetaStore/prod_1204107_1_lkwj45.jpg',
        },
      ],
      'stars': 3.5,
      'description': 'Rizado por horas, levanta hasta 4 veces más tus pestañas. Cepillo curvo que alcanza cada pestaña para máximo nivel de elevación de la raíz hasta la punta.',
    },
    {
      'id': '66',
      'title': 'Cosmetics',
      'name': 'Avon Ultra Volume Mascara A Prueba De Agua - 10 ml',
      'brand': 'Avon',
      'price': 32000,
      'oldPrice': 36000,
      'best': false,
      'featured': false,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1712688550/MetaStore/prod_1220116_1_kaoib3.jpg',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712688550/MetaStore/prod_1220116_1_kaoib3.jpg',
        },
        {
          'sku': 'v2SmiuNbZ9',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712688550/MetaStore/prod_1220116_1_kaoib3.jpg',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712688550/MetaStore/prod_1220116_1_kaoib3.jpg',
        },
      ],
      'stars': 3.5,
      'description': 'Ultra volume waterproof mascara para volumen instantáneo y duradero ¡a prueba de agua y sudor! tecnología amplifibre con fibras de diferentes formas y tamaños. Dan más densidad a cada pestaña.',
    },
    {
      'id': '67',
      'title': 'Cosmetics',
      'name': 'Pestañina Roja COLORFIX Ultimate Volume',
      'brand': 'Esika',
      'price': 24000,
      'oldPrice': 28000,
      'best': false,
      'featured': false,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1712182621/MetaStore/Pesta%C3%B1ina-roja_meeqay.jpg',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712705056/MetaStore/WhatsApp_Image_2024-04-09_at_6.23.39_PM_hug1ry.jpg',
        },
        {
          'sku': 'v2SmiuNbZ9',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712705052/MetaStore/WhatsApp_Image_2024-04-09_at_6.23.39_PM_1_cmce04.jpg',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712705049/MetaStore/WhatsApp_Image_2024-04-09_at_6.23.39_PM_2_uhqjbs.jpg',
        },
      ],
      'stars': 3.5,
      'description': 'Máscara de pestañas que brinda volumen indestructible ¡a prueba de todo!.',
    },
    {
      'id': '68',
      'title': 'Cosmetics',
      'name': 'Pestañina Morada Mega Full Size Fácil Retirado',
      'brand': 'Esika',
      'price': 25000,
      'oldPrice': 33000,
      'best': false,
      'featured': false,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1712182621/MetaStore/Pesta%C3%B1ina-morada_ap0unb.jpg',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712701416/MetaStore/WhatsApp_Image_2024-04-09_at_5.22.56_PM_qflwoc.jpg',
        },
        {
          'sku': 'v2SmiuNbZ9',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712701413/MetaStore/WhatsApp_Image_2024-04-09_at_5.22.56_PM_1_cdkv8k.jpg',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712701410/MetaStore/WhatsApp_Image_2024-04-09_at_5.22.56_PM_2_k41n43.jpg',
        },
      ],
      'stars': 3.5,
      'description': 'Máscara de pestañas #1 de ésika con efecto LARGO INSUPERABLE, de fácil retirado.',
    },
    {
      'id': '69',
      'title': 'Cosmetics',
      'name': 'Pestañina Negra Mega Multi Benefit',
      'brand': 'Esika',
      'price': 32000,
      'oldPrice': 36000,
      'best': false,
      'featured': false,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1712182621/MetaStore/Pesta%C3%B1ina-negra_nzsuog.jpg',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712704815/MetaStore/WhatsApp_Image_2024-04-09_at_5.27.01_PM_vx1vdi.jpg',
        },
        {
          'sku': 'v2SmiuNbZ9',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712704808/MetaStore/WhatsApp_Image_2024-04-09_at_5.27.01_PM_2_zhcves.jpg',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712704811/MetaStore/WhatsApp_Image_2024-04-09_at_5.27.01_PM_1_aumrhx.jpg',
        },
      ],
      'stars': 3.5,
      'description': 'Brinda 5 beneficios en 1 máscara: +Volumen + largo +rizado +definición +fortalecimiento',
  },
    
  //LOCIONES NATURA
    {
      'id': '70',
      'title': 'Lotions',
      'name': 'Locion Kaiak Clasica femenina',
      'brand': 'Natura',
      'price': 100000,
      'oldPrice': 120000,
      'best': false,
      'featured': false,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1712182641/MetaStore/Kaiak-clasica_bciohs.png',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712182641/MetaStore/Kaiak-clasica_bciohs.png',
        },
        {
          'sku': 'v2SmiuNbZ9',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712182641/MetaStore/Kaiak-clasica_bciohs.png',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712182641/MetaStore/Kaiak-clasica_bciohs.png',
        },
      ],
      'stars': 3.5,
      'description': 'La misma fragancia ahora en nuevo envase más sustentable. Camino olfativo: Cítrico. Bergamota, mandarina, jazmín Una frescura vibrante en una tarde soleada. Este clásico de la perfumería brasileña aporta una deslumbrante explosión cítrica de bergamota y naranja, con notas femeninas de jazmín. Nuevo envase hecho con más del 50% de plástico reciclado.',
    },
    {
      'id': '71',
      'title': 'Lotions',
      'name': 'Locion Kaiak vital femenina',
      'brand': 'Natura',
      'price': 100000,
      'oldPrice': 125000,
      'best': false,
      'featured': false,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1712182631/MetaStore/Kaiak-vital_jfbobe.png',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712182631/MetaStore/Kaiak-vital_jfbobe.png',
        },
        {
          'sku': 'v2SmiuNbZ9',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712182631/MetaStore/Kaiak-vital_jfbobe.png',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712182631/MetaStore/Kaiak-vital_jfbobe.png',
        },
      ],
      'stars': 3.5,
      'description': 'La misma fragancia ahora en nuevo envase más sustentable. Camino olfativo: Cítrico. Bergamota, mandarina, jazmín Una frescura vibrante en una tarde soleada. Este clásico de la perfumería brasileña aporta una deslumbrante explosión cítrica de bergamota y naranja, con notas femeninas de jazmín. Nuevo envase hecho con más del 50% de plástico reciclado.',
    },
    {
      'id': '72',
      'title': 'Lotions',
      'name': 'Locion Kaiak Oceano femenina',
      'brand': 'Natura',
      'price': 100000,
      'oldPrice': 130000,
      'best': false,
      'featured': false,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1712182631/MetaStore/Kaiak-oceano_xhyjf8.png',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712182631/MetaStore/Kaiak-oceano_xhyjf8.png',
        },
        {
          'sku': 'v2SmiuNbZ9',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712182631/MetaStore/Kaiak-oceano_xhyjf8.png',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712182631/MetaStore/Kaiak-oceano_xhyjf8.png',
        },
      ],
      'stars': 3.5,
      'description': 'Camino olfativo: Floral. Algas marinas, pataqueira, frutal acuoso.',
    },
    {
      'id': '73',
      'title': 'Lotions',
      'name': 'Locion Kaiak Aero femenina',
      'brand': 'Natura',
      'price': 100000,
      'oldPrice': 130000,
      'best': false,
      'featured': false,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1712182631/MetaStore/Kaiak-aero_clofaj.png',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712182631/MetaStore/Kaiak-aero_clofaj.png',
        },
        { 
          'sku': 'v2SmiuNbZ9',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712182631/MetaStore/Kaiak-aero_clofaj.png',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712182631/MetaStore/Kaiak-aero_clofaj.png',
        },
      ],
      'stars': 3.5,
      'description': 'Aromático Floral., un acorde cítrico y aromático con la presencia de lavanda y peonía. La combinación única de estos elementos aporta una explosión de frescura y feminidad.',
    },
    {
      'id': '74',
      'title': 'Lotions',
      'name': 'Locion Kaiak Aventura femenina',
      'brand': 'Natura',
      'price': 100000,
      'oldPrice': 130000,
      'best': false,
      'featured': false,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1712182628/MetaStore/Kaiak-aventura_ctq5py.png',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712182628/MetaStore/Kaiak-aventura_ctq5py.png',
        },
        {
          'sku': 'v2SmiuNbZ9',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712182628/MetaStore/Kaiak-aventura_ctq5py.png',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712182628/MetaStore/Kaiak-aventura_ctq5py.png',
        },
      ],
      'stars': 3.5,
      'description': 'La misma fragancia ahora en nuevo envase más sustentable. Camino olfativo: Floral. Peonia, jazmín, notas acuosas La combinación perfecta de agua, sol y bosque. Notas acuosas y verdes se unen a la vibración floral del muguet y del jazmín con la calidez del musk.',
  },
  {
      'id': '75',
      'title': 'Lotions',
      'name': 'Kaiak clásico masculino',
      'brand': 'Natura',
      'price': 100000,
      'oldPrice': 130000,
      'best': false,
      'featured': false,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1712594629/MetaStore/kaiak-man-1_n2hapm.jpg',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712594629/MetaStore/kaiak-man-1_n2hapm.jpg',
        },
        {
          'sku': 'v2SmiuNbZ9',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712594629/MetaStore/kaiak-man-1_n2hapm.jpg',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712594629/MetaStore/kaiak-man-1_n2hapm.jpg',
        },
      ],
      'stars': 3.5,
      'description': 'La misma fragancia ahora en nuevo envase más sustentable. Camino olfativo: Aromático. Herbal, bergamota, albahaca Intensidad: Baja Una fragancia acuática. Una combinación icónica de notas aromáticas, cítricas y acuosas, que aportan una poderosa frescura. Nuevo envase hecho con más del 50% de plástico reciclado.',
  },

  {
      'id': '76',
      'title': 'Lotions',
      'name': 'Kaiak urbe masculino',
      'brand': 'Natura',
      'price': 100000,
      'oldPrice': 130000,
      'best': false,
      'featured': false,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1712594630/MetaStore/kaiak-man-2_zmy9al.jpg',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712594630/MetaStore/kaiak-man-2_zmy9al.jpg',
        },
        {
          'sku': 'v2SmiuNbZ9',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712594630/MetaStore/kaiak-man-2_zmy9al.jpgg',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712594630/MetaStore/kaiak-man-2_zmy9al.jpg',
        },
      ],
      'stars': 3.5,
      'description': 'La frescura de las notas de limón y bergamota se mezclan a un fondo elegante de maderas ambaradas. El toque de especias como cardamomo y nuez moscada hacen de ella una fragancia elegante e inusitada. Camino Olfativo: Herbal, moderado, nuez moscada. A quién está dirigido: Para quienes aprecian el aire libre y la naturaleza, de espíritu joven y osado.',
  },
  {
      'id': '77',
      'title': 'Lotions',
      'name': 'Kaiak aventura masculino',
      'brand': 'Natura',
      'price': 100000,
      'oldPrice': 130000,
      'best': false,
      'featured': false,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1712594630/MetaStore/kaiak-man-3_gflxpb.jpg',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712594630/MetaStore/kaiak-man-3_gflxpb.jpg',
        },
        {
          'sku': 'v2SmiuNbZ9',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712594630/MetaStore/kaiak-man-3_gflxpb.jpg',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712594630/MetaStore/kaiak-man-3_gflxpb.jpg',
        },
      ],
      'stars': 3.5,
      'description': 'La misma fragancia ahora en nuevo envase más sustentable. Camino olfativo: Aromático. Herbal, musk, mandarina La combinación perfecta de agua, sol y bosque. Frescura cítrica y vibrante de la bergamota con notas de musk y maderas cremosas como el sándalo.',
  },
  {
      'id': '78',
      'title': 'Lotions',
      'name': 'Kaiak aero masculino',
      'brand': 'Natura',
      'price': 100000,
      'oldPrice': 130000,
      'best': false,
      'featured': false,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1712595102/MetaStore/Kaiak-man-6_rkm5be.jpg',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712595102/MetaStore/Kaiak-man-6_rkm5be.jpg',
        },
        {
          'sku': 'v2SmiuNbZ9',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712595102/MetaStore/Kaiak-man-6_rkm5be.jpg',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712595102/MetaStore/Kaiak-man-6_rkm5be.jpg',
        },
      ],
      'stars': 3.5,
      'description': 'Una fragancia aromática acuática que te sumerge en el encuentro del viento con el mar. La combinación de notas verdes y un toque salado de agua de mar se mezcla con robustas notas de madeira, creando una fragancia potente y moderna.',
  },
  {
      'id': '79',
      'title': 'Lotions',
      'name': 'Kaiak oceano masculino',
      'brand': 'Natura',
      'price': 100000,
      'oldPrice': 130000,
      'best': false,
      'featured': false,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1712594630/MetaStore/kaiak-man-4_lnghmm.jpg',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712594630/MetaStore/kaiak-man-4_lnghmm.jpg',
        },
        {
          'sku': 'v2SmiuNbZ9',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712594630/MetaStore/kaiak-man-4_lnghmm.jpg',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712594630/MetaStore/kaiak-man-4_lnghmm.jpg',
        },
      ],
      'stars': 3.5,
      'description': 'Camino olfativo: Arómatico. Herbal, algas marinas, pataqueira, complejo acuoso.',
  },
  {
      'id': '80',
      'title': 'Lotions',
      'name': 'Kaiak ultra masculino',
      'brand': 'Natura',
      'price': 100000,
      'oldPrice': 130000,
      'best': false,
      'featured': false,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1712594631/MetaStore/kaiak-man-5_rb2hei.jpg',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712594631/MetaStore/kaiak-man-5_rb2hei.jpg',
        },
        {
          'sku': 'v2SmiuNbZ9',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712594631/MetaStore/kaiak-man-5_rb2hei.jpg',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712594631/MetaStore/kaiak-man-5_rb2hei.jpg',
        },
      ],
      'stars': 3.5,
      'description': 'Siente la ultra frescura que impacta. Una combinación de notas anisadas y acuaticas con la frescura del estoraque, un ingrediente de la naturaleza brasileña, realzado por maderas de cedro.',
  },
   
  //BARBAS

    {
      'id': '81',
      'title': 'Beard',
      'name': 'Pomada immortal para barba X50ML',
      'brand': 'Deluxe',
      'price': 25000,
      'oldPrice': 29000,
      'best': false,
      'featured': false,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1712269354/MetaStore/Creama-barba_aghx0d.jpg',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712269354/MetaStore/Creama-barba_aghx0d.jpg',
        },
        {
          'sku': 'v2SmiuNbZ7',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712269354/MetaStore/Creama-barba_aghx0d.jpg',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712269354/MetaStore/Creama-barba_aghx0d.jpg',
        },
      ],
      'stars': 3.5,
      'description': 'Brinda un poder de sujecion flexible al hacer que tu cabello luzca perfecto y natural',
  },
    {
      'id': '82',
      'title': 'Beard',
      'name': 'ACEITE PARA BARBA THE BARBERSHOP',
      'brand': 'BarberShop',
      'price': 100000,
      'oldPrice': 130000,
      'best': false,
      'featured': false,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1712679581/MetaStore/ACEITE-1_2aAS0rj_sd52cp.jpg',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712679590/MetaStore/ACEITE-3_cDJ32Ee_vpxtbt.jpg',
        },
        {
          'sku': 'v2SmiuNbZ7',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712679600/MetaStore/ACEITE-4_dariVIE_au4lus.jpg',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712679590/MetaStore/ACEITE-3_cDJ32Ee_vpxtbt.jpg',
        },
      ],
      'stars': 3.5,
      'description': 'El aceite multi beneficios para la barba the barbershop for men, es una Combinación de oleos de origen natural, especialmente desarrollada para nutrir las capas más profundas de la fibra capilar. Aporta propiedades emolientes a la piel, mejora el aspecto, fortalece, suaviza e hidrata, Ideal para suavizar y fortalecer la barba. Con Aceite de maracuyá.',
    },
    {
      'id': '83',
      'title': 'Beard',
      'name': 'ACEITE PARA BARBA THE BARBERSHOP',
      'brand': 'BarberShop',
      'price': 100000,
      'oldPrice': 130000,
      'best': false,
      'featured': false,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1712269354/MetaStore/Aceite-barba_zheeq1.jpg',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712269354/MetaStore/Aceite-barba_zheeq1.jpg',
        },
        {
          'sku': 'v2SmiuNbZ7',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712269354/MetaStore/Aceite-barba_zheeq1.jpg',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712269354/MetaStore/Aceite-barba_zheeq1.jpg',
        },
      ],
      'stars': 3.5,
      'description': 'El aceite multi beneficios para la barba the barbershop for men, es una Combinación de oleos de origen natural, especialmente desarrollada para nutrir las capas más profundas de la fibra capilar. Aporta propiedades emolientes a la piel, mejora el aspecto, fortalece, suaviza e hidrata, Ideal para suavizar y fortalecer la barba. Con Aceite de maracuyá.',
    },
    {
      'id': '84',
      'title': 'Beard',
      'name': 'MINOXIDIL X 30 ML KARICIA',
      'brand': 'Deluxe',
      'price': 25000,
      'oldPrice': 29000,
      'best': false,
      'featured': false,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1712269354/MetaStore/Minoxidil_zqlbeg.jpg',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712269354/MetaStore/Minoxidil_zqlbeg.jpg',
        },
        {
          'sku': 'v2SmiuNbZ7',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712269354/MetaStore/Minoxidil_zqlbeg.jpg',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712269354/MetaStore/Minoxidil_zqlbeg.jpg',
        },
      ],
      'stars': 3.5,
      'description': 'El tónico Minoxidil es utilizado hace más de 30 años como tratamiento contra la alopecia, crecimiento del cabello y desarrollo de barba, mostrando excelentes resultados en todos los casos. Tónico minoxidil y arándanos negros ayuda con el crecimiento de cabello, barba o vellos deseados. Contiene aloe vera y vitamina E.',
    },
    {
      'id': '85',
      'title': 'Beard',
      'name': 'Aceite para barba',
      'brand': 'ClubMan',
      'price': 26000,
      'oldPrice': 32000,
      'best': false,
      'featured': false,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1712269354/MetaStore/Aceite-barba2_vnxn0h.jpg',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712269354/MetaStore/Aceite-barba2_vnxn0h.jpg',
        },
        {
          'sku': 'v2SmiuNbZ7',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712269354/MetaStore/Aceite-barba2_vnxn0h.jpg',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712269354/MetaStore/Aceite-barba2_vnxn0h.jpg',
        },
      ],
      'stars': 3.5,
      'description': 'Proporciona un brillo natural para barba: lo que sea que te guste, el aceite para barba Clubman Pinaud dejará tu barba con un aspecto libre de encrespamiento y bajo control. Tu barba nunca estará tan hidratada y nutrida mientras se ve increíblemente arreglada sin encrespamiento y vuelos. También es una excelente opción calmante para aquellos que lidian con picazón y descamación. Está destinado a ser utilizado como una fórmula diaria que eventualmente relajará cualquier barba.',
  },
    
    {
      'id': '86',
      'title': 'Beard',
      'name': 'PEINILLA PARA BARBA MADERA',
      'brand': 'BarberShop',
      'price': 17000,
      'oldPrice': 20000,
      'best': true,
      'featured': true,
      'time': 'Nuevo',
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1712678869/MetaStore/PEINILLA-PARA-BARBA-MADERA_vxgxdx.jpg',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712678869/MetaStore/PEINILLA-PARA-BARBA-MADERA_vxgxdx.jpg',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712678869/MetaStore/PEINILLA-PARA-BARBA-MADERA_vxgxdx.jpg',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712678869/MetaStore/PEINILLA-PARA-BARBA-MADERA_vxgxdx.jpg',
        },
      ],
      'stars': 2.7,
      'description': 'la peinilla ayuda a lograr un cabello saludable, tiene un diseño de mango de bambú Natural que aporta una fuente de energía renovable para ayudar a proteger el planeta, gracias a su tamaño y a sus finos dientes es ideal para llevarlo a todos lados y puede ser utilizado en el cabello o en la barba ya sea húmedo o seco.',
    },
    {
      'id': '87',
      'title': 'Talco',
      'name': 'Talco corporal ',
      'brand': 'BarberShop',
      'price': 17500,
      'oldPrice': 22000,
      'best': false,
      'featured': false,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1674775683/MetaStore/talco-corporal_m8fbaw.jpg',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674775683/MetaStore/talco-corporal_m8fbaw.jpg',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674775683/MetaStore/talco-corporal_m8fbaw.jpg',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674775683/MetaStore/talco-corporal_m8fbaw.jpg',
        },
      ],
      'stars': 5,
      'description': 'Efectivo tratamiento capilar para que luzcas un Cabello hidratado y revitalizado. Contiene cera de abejas y agacate tratamiento perfecto para revitalizar cabellos débiles ó quebradizos, tratados con permanentes, alisados, cepillados y tinturados. Caída*: caída por quiebre.',
    },
    {
      'id': '88',
      'title': 'Talco',
      'name': 'Talco corporal ',
      'brand': 'BarberShop',
      'price': 17500,
      'oldPrice': 22000,
      'best': false,
      'featured': false,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1674775683/MetaStore/talco-corporal_m8fbaw.jpg',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674775683/MetaStore/talco-corporal_m8fbaw.jpg',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674775683/MetaStore/talco-corporal_m8fbaw.jpg',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1674775683/MetaStore/talco-corporal_m8fbaw.jpg',
        },
      ],
      'stars': 5,
      'description': 'Efectivo tratamiento capilar para que luzcas un Cabello hidratado y revitalizado. Contiene cera de abejas y agacate tratamiento perfecto para revitalizar cabellos débiles ó quebradizos, tratados con permanentes, alisados, cepillados y tinturados. Caída*: caída por quiebre.',
  },
    {
      'id': '89',
      'title': 'FacialCare',
      'name': 'Protector aclarador de manchas FPS 50 ',
      'brand': 'Natura',
      'price': 88000,
      'oldPrice': 99000,
      'best': false,
      'featured': false,
      'time': 'Nuevo',
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1712440726/MetaStore/Cromos-3_rrfzlz.jpg',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712440726/MetaStore/Cromos-2_wiqusy.jpg',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712440726/MetaStore/Cromos-1_ga9wvv.jpg',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712440726/MetaStore/Cromos-2_wiqusy.jpg',
        },
      ],
      'stars': 5,
      'description': 'Protección solar y acción multiaclaradora para reducir las diferencias del tono de la piel. Aclara manchas e impide su aparición. Fórmula con toque seco y rápida absorción. Cobertura natural que disimula imperfecciones y uniformiza el tono de la piel.',
  },
    {
      'id': '90',
      'title': 'FacialCare',
      'name': 'Protector solar facial en gel FPS 50',
      'brand': 'Natura',
      'price': 52000,
      'oldPrice': 58000,
      'best': false,
      'featured': false,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1712441618/MetaStore/Protn-1_x1eun4.jpg',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712441618/MetaStore/Protn-1_x1eun4.jpg',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712441618/MetaStore/Protn-1_x1eun4.jpg',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712441618/MetaStore/Protn-1_x1eun4.jpg',
        },
      ],
      'stars': 5,
      'description': 'Protección solar y acción multiaclaradora para reducir las diferencias del tono de la piel. Aclara manchas e impide su aparición. Fórmula con toque seco y rápida absorción. Cobertura natural que disimula imperfecciones y uniformiza el tono de la piel.',
  },
    {
      'id': '91',
      'title': 'FacialCare',
      'name': 'Protector solar facial en gel crema FPS 50',
      'brand': 'Natura',
      'price': 55000,
      'oldPrice': 68000,
      'best': false,
      'featured': false,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1712594515/MetaStore/ProtN-22_btxa2v.jpg',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712594515/MetaStore/ProtN-22_btxa2v.jpg',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712594515/MetaStore/ProtN-22_btxa2v.jpg',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712594515/MetaStore/ProtN-22_btxa2v.jpg',
        },
      ],
      'stars': 5,
      'description': 'Hidratación Intensiva. Textura ligera. Formación de película humectante. Toque seco.',
  },
    {
      'id': '92',
      'title': 'FacialCare',
      'name': 'Protector solar facial en gel FPS 30',
      'brand': 'Yambal',
      'price': 52000,
      'oldPrice': 58000,
      'best': false,
      'featured': false,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1712441618/MetaStore/Protn-2_kouoqw.jpg',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712441618/MetaStore/Protn-2_kouoqw.jpg',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712441618/MetaStore/Protn-2_kouoqw.jpg',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712441618/MetaStore/Protn-2_kouoqw.jpg',
        },
      ],
      'stars': 5,
      'description': 'Protección solar y acción multiaclaradora para reducir las diferencias del tono de la piel. Aclara manchas e impide su aparición. Fórmula con toque seco y rápida absorción. Cobertura natural que disimula imperfecciones y uniformiza el tono de la piel.',
  },
    {
      'id': '93',
      'title': 'FacialCare',
      'name': 'Total Block Protector Solar Jumbo SPF 100',
      'brand': 'Yambal',
      'price': 75000,
      'oldPrice': 88000,
      'best': false,
      'featured': false,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1712441558/MetaStore/Total-1_mxi24p.jpg',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712441558/MetaStore/Total-1_mxi24p.jpg',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712441558/MetaStore/Total-1_mxi24p.jpg',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712441558/MetaStore/Total-1_mxi24p.jpg',
        },
      ],
      'stars': 5,
      'description': 'Un protector solar con la fórmula perfecta, dermatológicamente probada, para estar siempre protegido de los rayos del sol.',
  },
    {
      'id': '94',
      'title': 'FacialCare',
      'name': 'Total Block Protector Solar Kids SPF 100',
      'brand': 'Yambal',
      'price': 75000,
      'oldPrice': 88000,
      'best': false,
      'featured': false,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1712441558/MetaStore/Total-2_mkob4e.jpg',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712441558/MetaStore/Total-2_mkob4e.jpg',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712441558/MetaStore/Total-2_mkob4e.jpg',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712441558/MetaStore/Total-2_mkob4e.jpg',
        },
      ],
      'stars': 5,
      'description': 'Total Block Kids renovó su fórmula de SPF 70 a SPF 100 para brindar mayor protección para la delicada piel de los niños. Además, ahora protege contra el 100% de los rayos dañinos del sol con una fórmula no lágrimas y más contenido para que la diversión no termine.',
  },
    {
      'id': '95',
      'title': 'FacialCare',
      'name': 'Total Block Protector Solar Matificante SPF 100',
      'brand': 'Yambal',
      'price': 55000,
      'oldPrice': 66000,
      'best': false,
      'featured': false,
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1712441558/MetaStore/Total-3_rj4p0q.jpg',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712441558/MetaStore/Total-3_rj4p0q.jpg',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712441558/MetaStore/Total-3_rj4p0q.jpg',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712441558/MetaStore/Total-3_rj4p0q.jpg',
        },
      ],
      'stars': 5,
      'description': 'Un bloqueador solar matificante que además de proteger tu piel de los rayos del sol, la deja sin residuos blancos ni pegajosos. Protege tu piel con un acabado súper ligero y sin brillo!',
  },
    {
      'id': '96',
      'title': 'FacialCare',
      'name': 'Protector Compacto Color SPF 100 Total Block Beige Claro',
      'brand': 'Yambal',
      'price': 58000,
      'oldPrice': 68000,
      'best': false,
      'featured': false,
      'time': 'Nuevo',
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1712441558/MetaStore/Total-4_xierac.jpg',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712441558/MetaStore/Total-4_xierac.jpg',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712441558/MetaStore/Total-4_xierac.jpg',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712441558/MetaStore/Total-4_xierac.jpg',
        },
      ],
      'stars': 5,
      'description': 'Un protector solar compacto con SPF 100 y PA++++ que protege contra el 100% de los rayos dañinos del sol y la luz artificial, los cuales aceleran el envejecimiento de la piel y ocasionan radicales libres. Además, cubre imperfecciones, para lucir una piel linda y protegida.',
  },
    {
      'id': '97',
      'title': 'Tratamiento',
      'name': 'Tratamiento Revitalizador Potao Do Amor 1000 Gr -',
      'brand': 'Yambal',
      'price': 25000,
      'oldPrice': 31000,
      'best': false,
      'featured': false,
      'time': 'Nuevo',
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1712674850/MetaStore/Skala-9_ytnikh.png',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712674850/MetaStore/Skala-9_ytnikh.png',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712674850/MetaStore/Skala-9_ytnikh.png',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712674850/MetaStore/Skala-9_ytnikh.png',
        },
      ],
      'stars': 5,
      'description': 'El Tratamiento Revitalizador Potao do Amor de Skala, en su presentación de 1000 gr, es una fusión excepcional de 18 elementos poderosos diseñados para revitalizar y restaurar el brillo natural de tu cabello. Este tratamiento multifuncional no solo nutre profundamente, sino que también puede usarse como Crema de Tratamiento.',
  },
    
    {
      'id': '98',
      'title': 'Tratamiento',
      'name': 'Mais Cachinos Niñas-',
      'brand': 'Yambal',
      'price': 25000,
      'oldPrice': 31000,
      'best': false,
      'featured': false,
      'time': 'Nuevo',
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1712674681/MetaStore/Skala-8_p0o0d6.png',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712674681/MetaStore/Skala-8_p0o0d6.png',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712674681/MetaStore/Skala-8_p0o0d6.pngg',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712674681/MetaStore/Skala-8_p0o0d6.png',
        },
      ],
      'stars': 5,
      'description': 'MaisCachinhos Kids ofrece hidratación perfecta para cabello rizado. Contiene aloe vera, D-pantenol y manteca de karité en su fórmula, sin sulfatos, parabenos, aceite mineral ni vaselina. Esta línea asegura que los pequeños tengan cabello suave y muy saludable. ',
  },
    {
      'id': '99',
      'title': 'Tratamiento',
      'name': 'Bomba De Vitaminas S.O.S X 1000 Gr',
      'brand': 'Yambal',
      'price': 25000,
      'oldPrice': 31000,
      'best': false,
      'featured': false,
      'time': 'Nuevo',
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1712674504/MetaStore/Skala-7_o0vwvl.jpg',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712674504/MetaStore/Skala-7_o0vwvl.jpg',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712674504/MetaStore/Skala-7_o0vwvl.jpg',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712674504/MetaStore/Skala-7_o0vwvl.jpg',
        },
      ],
      'stars': 5,
      'description': 'Ayuda en el crecimiento. Tiene una fórmula con ingredientes de gran alcance ricos en nutrientes que ayudan en el crecimiento del cabello. Prepárese para los cumplidos, se recomienda que utilice y el abuso de esta línea! Ideal para todo tipo de cabello. 100% Vegano.',
  },
    {
      'id': '100',
      'title': 'Tratamiento',
      'name': 'Coquetel de frutas',
      'brand': 'Skala',
      'price': 25000,
      'oldPrice': 31000,
      'best': false,
      'featured': false,
      'time': 'Nuevo',
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1712618097/MetaStore/o139_bcaigk.png',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712618097/MetaStore/o139_bcaigk.png',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712618097/MetaStore/o139_bcaigk.png',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712618097/MetaStore/o139_bcaigk.png',
        },
      ],
      'stars': 5,
      'description': 'Hidratación Nostálgica | Liberado. Sin Sulfatos, Parabenos, Petrolato, Siliconas y Aceite Mineral. Ananás: rico en Vitaminas A, B y C. Suaviza e hidrata el cabello resecado. Agua de coco: Nutrientes poderosos que ofrecen suavidad a el cabello. Mora: Posee propriedades que ayudan a fortalecer el cabello seco y opaco.',
  },
    {
      'id': '101',
      'title': 'Tratamiento',
      'name': 'Tratamiento Divino Potinho Kids 1000 Gr',
      'brand': 'Yambal',
      'price': 25000,
      'oldPrice': 31000,
      'best': false,
      'featured': false,
      'time': 'Nuevo',
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1712616794/MetaStore/Skala-3_qbvla9.jpg',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712616794/MetaStore/Skala-3_qbvla9.jpg',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712616794/MetaStore/Skala-3_qbvla9.jpg',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712616794/MetaStore/Skala-3_qbvla9.jpg',
        },
      ],
      'stars': 5,
      'description': 'El Tratamiento Skala Kids Divino Potão es una solución mágica ✨ diseñada específicamente para los más pequeños de la casa. Este producto no solo hace más fácil la rutina de cuidado del cabello, sino que también asegura un tratamiento amoroso y adecuado para los delicados rizos y crespos.',
  },
    {
      'id': '102',
      'title': 'Tratamiento',
      'name': 'Tratamiento Mais Lisos X 1000 Gr',
      'brand': 'Yambal',
      'price': 25000,
      'oldPrice': 31000,
      'best': false,
      'featured': false,
      'time': 'Nuevo',
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1712616793/MetaStore/Skala-2_sgwezl.jpg',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712616793/MetaStore/Skala-2_sgwezl.jpg',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712616793/MetaStore/Skala-2_sgwezl.jpg',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712616793/MetaStore/Skala-2_sgwezl.jpg',
        },
      ],
      'stars': 5,
      'description': 'El Tratamiento Mais Lisos x 1000 gr de Skala es una solución integral para el cuidado del cabello, proporcionando una hidratación profunda y protección desde la raíz hasta las puntas. Este producto, presentado en un práctico envase de 1000 gr, está enriquecido con vitamina E y otros nutrientes esenciales.',
  },
    {
      'id': '103',
      'title': 'Waxes',
      'name': 'CERA CON MINOXIDIL X 150G',
      'brand': 'Barbershop',
      'price': 25000,
      'oldPrice': 31000,
      'best': false,
      'featured': false,
      'time': 'Nuevo',
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1712706586/MetaStore/CERA-MINOXIDIL_wxkhu4.jpg',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712706590/MetaStore/mino_y4pcwz.jpg',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712706593/MetaStore/minox_kjmvzz.jpg',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712706590/MetaStore/mino_y4pcwz.jpg',
        },
      ],
      'stars': 5,
      'description': 'El Tratamiento Mais Lisos x 1000 gr de Skala es una solución integral para el cuidado del cabello, proporcionando una hidratación profunda y protección desde la raíz hasta las puntas. Este producto, presentado en un práctico envase de 1000 gr, está enriquecido con vitamina E y otros nutrientes esenciales.',
  },
    {
      'id': '104',
      'title': 'Waxes',
      'name': 'CERA OPALINA BARBERSHOP X190GR',
      'brand': 'Barbershop',
      'price': 25000,
      'oldPrice': 31000,
      'best': false,
      'featured': false,
      'time': 'Nuevo',
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1712707050/MetaStore/CERA-OPALINA1_lgfzili_xictqb.jpg',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712707054/MetaStore/CERA-OPALINA2_OfNd2fq_qmtova.jpg',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712707058/MetaStore/CERA-OPALINA3_NSiXs4a_liuxqx.jpg',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712707088/MetaStore/CERA-OPALINA4_CsVB0EQ_vggdbg.jpg',
        },
      ],
      'stars': 5,
      'description': 'La cera moldeadora y fijadora opalina the barbershop x 190g, es ideal para prevenir la caída del cabello gracias a los extractos de ginseng que fortalecen los folículos capilares y el aceite de oliva brinda una hidratación profunda sin dejar sensación grasa. define, moldea y texturiza, tiene una excelente fijación. Recomendada para motociclistas ya que al quitar el casco permite retocar el peinado humedeciendo un poco la mano y moldeando nuevamente el cabello. Ayuda a tener un peinado definido, libre de frizz, con Extracto de ginseng, aceite de oliva hidrogenado, filtro uv, silicona y pantenol. Libre de Parabenos.',
  },
    {
      'id': '105',
      'title': 'Waxes',
      'name': 'CERA OPALINA BARBERSHOP X120g',
      'brand': 'Barbershop',
      'price': 25000,
      'oldPrice': 31000,
      'best': false,
      'featured': false,
      'time': 'Nuevo',
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1712008193/MetaStore/3_xqXEGEs_d2scv4.jpg',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712707206/MetaStore/CERA-NITROWAX2_Tug6kxV_rnhb9t.jpg',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712707216/MetaStore/CERA-NITROWAX3_EnhIZpJ_zwtrss.jpg',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712707220/MetaStore/CERA-NITROWAX4_8BA7n96_f9gcd0.jpg',
        },
      ],
      'stars': 5,
      'description': 'la cera moldeadora y fijadora the barbershop nitro wax x120g es ideal para todo tipo de cabello, esta enriquecida con extractos naturales como el D-pantenol, keratina, aceite de coco, que con su contenido de ácidos grasos le da engrosamiento a la fibra capilar, La cera nitro wax tiene una excelente fijación, no reseca el cuero cabelludo, está libre de alcohol y parabenos. Otorga fijación y definición a tu peinado..',
  },
    {
      'id': '106',
      'title': 'Waxes',
      'name': 'CERA VIBRAWAX',
      'brand': 'Barbershop',
      'price': 35000,
      'oldPrice': 38000,
      'best': false,
      'featured': false,
      'time': 'Nuevo',
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1712707471/MetaStore/vibra-wax_tlltut.jpg',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712707501/MetaStore/BARUP0010-3_mjoIEcm_ellrwk.jpg',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712707492/MetaStore/BARUP0010-1_MCEkobB_cpnxzk.jpg',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712707497/MetaStore/BARUP0010-2_HeIlH84_zkhfd2.jpg',
        },
      ],
      'stars': 5,
      'description': 'la cera moldeadora y fijadora Barber up vibra wax x480 g es ideal para todo tipo de cabello, esta enriquecida con extractos naturales como el D-pantenol, keratina, aceite de coco, que con su contenido de ácidos grasos le da engrosamiento a la fibra capilar. La cera vibra wax tiene una excelente fijación, no reseca el cuero cabelludo, está libre parabenos. Otorga fijación y definición a tu peinado.',
  },
    {
      'id': '107',
      'title': 'Cosmetics',
      'name': 'Aceite de almendras',
      'brand': 'Kanechom',
      'price': 35000,
      'oldPrice': 38000,
      'best': false,
      'featured': false,
      'time': 'Nuevo',
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1712707998/MetaStore/WhatsApp_Image_2024-04-03_at_12.47.56_PM_wnfhdp.jpg',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712707993/MetaStore/WhatsApp_Image_2024-04-03_at_12.47.56_PM_1_las4ng.jpg',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712008161/MetaStore/aceite-de-almendras_ktvcqj.png',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712707956/MetaStore/WhatsApp_Image_2024-04-03_at_12.47.56_PM_2_kwupnv.jpg',
        },
      ],
      'stars': 5,
      'description': 'El aceite de almendras Kanechom es versátil, se puede utilizar para hidratar y proteger la piel o para potenciar la hidratación del cabello. Rica en vitaminas, favorece la suavidad, la tersura y el perfume.',
  },
    {
      'id': '108',
      'title': 'Cosmetics',
      'name': 'Aceite de argan',
      'brand': 'Kanechom',
      'price': 35000,
      'oldPrice': 38000,
      'best': false,
      'featured': false,
      'time': 'Nuevo',
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1712008161/MetaStore/aceite-de-argan_wmvcud.png',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712707993/MetaStore/WhatsApp_Image_2024-04-03_at_12.47.56_PM_1_las4ng.jpg',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712008161/MetaStore/aceite-de-argan_wmvcud.png',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712707956/MetaStore/WhatsApp_Image_2024-04-03_at_12.47.56_PM_2_kwupnv.jpg',
        },
      ],
      'stars': 5,
      'description': 'El aceite de argán Kanechom es conocido como el oro de Marruecos debido a su poder extremadamente hidratante. Permite que la piel absorba los nutrientes, dejándola suave y protegida.',
  },
    {
      'id': '109',
      'title': 'Cosmetics',
      'name': 'Aceite de coco',
      'brand': 'Kanechom',
      'price': 35000,
      'oldPrice': 38000,
      'best': false,
      'featured': false,
      'time': 'Nuevo',
      'image': 'https://res.cloudinary.com/imagesfull/image/upload/v1712008161/MetaStore/aceites-imperiales-con-coco_q9difs.png',
      'gallarey': [
        {
          'sku': 'v2SmiuNbZ8',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712707993/MetaStore/WhatsApp_Image_2024-04-03_at_12.47.56_PM_1_las4ng.jpg',
        },
        {
          'sku': 'GP7Mv3RZR2',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712008161/MetaStore/aceites-imperiales-con-coco_q9difs.png',
        },
        {
          'sku': 'do4wJiZOc1',
          'url': 'https://res.cloudinary.com/imagesfull/image/upload/v1712707956/MetaStore/WhatsApp_Image_2024-04-03_at_12.47.56_PM_2_kwupnv.jpg',
        },
      ],
      'stars': 5,
      'description': 'Los Aceites Imperiales Kanechom con Coco son una combinación extraordinaria de aceites preciosos obtenidos de semillas, hierbas y frutas. Promueve la nutrición, repone la lubricidad esencial para la suavidad y vitalidad. Se puede utilizar para hidratar y proteger la piel o para potenciar la hidratación del cabello.',
    },
  // Otros productos...
];

// Define el tipo para la respuesta de la ruta
type ProductsResponse = Product[];

// Ruta para obtener todos los productos
router.get<{}, ProductsResponse>('/', (req, res) => {
  res.json(products); 
});

export default router;
