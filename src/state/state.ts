"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function State() {
  const router = useRouter();
  const [data, setData] = useState([]) as any;

  const mockData = [
    {
      id: 8,
      name: "APEL MALANG ESPRESSO Finca Yudhistira Natural",
      price: 120000,
      description:
        "An awesome lot from a farm which belong to a family of our best friend, Yudistira. This is the family’s first move into specialty coffee industry but no one should never be underestimated their first move. A \\nlivestock farm turn into coffee farm, located at Gunung Arjuna (1100 MASL) Malang, yields enough proof that coffee grown and harvested there is indeed a great coffee. The whole family involvement in processing the coffee resulting a floral, sweet and very clean coffee beyond average coffee from Indonesia. The coffee inside is a natural process went through sundried for 5 weeks and rest for 1 month prior to delivery. Started in the year of 2017, this is more than a coffee with Love",
      short_description: "APEL MALANG ESPRESSO",
      slug: "apel-malang-246",
      min_order: 0,
      is_merchant_discount: 0,
      discount_amount: 0,
      seller_id: 3,
      product_type_id: 1,
      is_active: 1,
      is_deleted: 0,
      created_at: "2021-12-21T00:24:46.000000Z",
      updated_at: "2021-12-21T00:24:46.000000Z",
      product_type: {
        id: 1,
        name: "Roasted Bean",
        slug: "roasted-bean-2",
        created_at: "2021-12-21T00:00:07.000000Z",
        updated_at: "2021-12-21T00:00:07.000000Z",
      },
      images: [
        {
          id: 9,
          product_id: 8,
          image_url:
            "https://res.cloudinary.com/pt-folka-indonesia-teknologi/image/upload/v1640021111/2021-01-08T12_29_49.591Z_wr0uul.png",
          is_primary: 1,
          created_at: "2021-12-21T00:25:17.000000Z",
          updated_at: "2021-12-21T00:25:17.000000Z",
        },
        {
          id: 10,
          product_id: 8,
          image_url:
            "https://res.cloudinary.com/pt-folka-indonesia-teknologi/image/upload/v1640021111/2021-01-08T12_29_49.591Z_wr0uul.png",
          is_primary: 0,
          created_at: "2021-12-21T00:25:45.000000Z",
          updated_at: "2021-12-21T00:25:45.000000Z",
        },
      ],
    },
    {
      id: 9,
      name: "APEL MALANG Finca Yudhistira Natural",
      price: 120000,
      description:
        "Microlot coffee renowned for clean with loud and clear flavour. Handled by respective family with amazing sortation! This coffee is a natural processed, a new  processed for this family! Highlighted with huge green apple flavor yet we call this coffee as Apel Malang, great for filter coffee",
      short_description: "APEL MALANG",
      slug: "apel-malang-245",
      min_order: 0,
      is_merchant_discount: 0,
      discount_amount: 0,
      seller_id: 3,
      product_type_id: 1,
      is_active: 1,
      is_deleted: 0,
      created_at: "2021-12-21T00:26:49.000000Z",
      updated_at: "2021-12-21T00:26:49.000000Z",
      product_type: {
        id: 1,
        name: "Roasted Bean",
        slug: "roasted-bean-2",
        created_at: "2021-12-21T00:00:07.000000Z",
        updated_at: "2021-12-21T00:00:07.000000Z",
      },
      images: [
        {
          id: 11,
          product_id: 9,
          image_url:
            "https://res.cloudinary.com/pt-folka-indonesia-teknologi/image/upload/v1640021242/2021-01-08T12_21_24.133Z_memuoh.png",
          is_primary: 1,
          created_at: "2021-12-21T00:27:52.000000Z",
          updated_at: "2021-12-21T00:27:52.000000Z",
        },
        {
          id: 12,
          product_id: 9,
          image_url:
            "https://res.cloudinary.com/pt-folka-indonesia-teknologi/image/upload/v1640021258/2021-01-08T12_21_26.405Z_seaf8r.png",
          is_primary: 0,
          created_at: "2021-12-21T00:27:52.000000Z",
          updated_at: "2021-12-21T00:27:52.000000Z",
        },
      ],
    },
    {
      id: 10,
      name: "ARABIKA BALI KINTAMANI 200gram MAHARAJA COFFEE",
      price: 82000,
      description:
        "Pulau Bali di kenal dunia sebagai tujuan wisata, pulau kecil dengan luas setengah Jamaica yang mayoritas penduduknya beragama Hindu, Bali dianugrahi dengan pantai pasir putih eksotis dan diwarisi bakat seni dan budaya. Ritual adat dan keagamaan, kerajinan tangan, seni tari dan musik ikut melengkapi keindahan pulau ini.\\n\\nKopi Arabika Bali Kintamani di tanam oleh petani kecil secara organik di lereng gunung Batur dengan cara olah basah. Kopi Kintamani memiliki karakter dan citarasa segar buah-buahan, bold acidity, dan kekentalan baik. \\n\\nSangrai segar dari roaster kami\\nMasa kadaluwarsa 12 bulan dari tanggal produksi\\nDirekomendasikan untuk dikonsumsi dalam 3 bulan untuk aroma dan rasa terbaik\\nDapat memilih bentuk biji atau bubuk, dapat di pilih ketika pemesanan\\nProfil sangrai yang optimum, di mana aroma dan rasa yang terbaik, manis dan keasaman tertinggi, pahit terendah, dengan keasaman terkontrol\\nKualitas Spesialti, tanpa cacat\\nJaminan Mutu:\\nJika dalam produk yang di belanja tidak sesuai dengan deskripsi kami, Anda dapat klaim untuk penggantian.\\n\\nSemua produk Kopi Maharaja sudah memiliki izin edar BPOM RI. MD.\\nNomor MD tertera di setiap etiket kemasan.\\n\\nKualitas terjamin, higenis, dan mutu tinggi.\\n\\n_______________________________________________\\n\\nThe island of Bali is known to the world as a tourist destination, a small island with an area of ​​half of Jamaica and the majority of the population is Hindu, Bali is blessed with exotic white sand beaches and inherited artistic and cultural talents. Traditional and religious rituals, handicrafts, dance and music complement the beauty of this island.\\n\\nKintamani Bali Arabica Coffee is planted by small farmers organically on the slopes of Mount Batur by wet processing. Kintamani coffee has the character and taste of fresh fruits, bold acidity, and good thickness.\\n\\nFresh Roast from our Own roaster\\nExpired 360 days from the production date\\nSuggest to consume within 3 months for best aroma and taste\\nPacked in high quality foil bag with degassing valve. tintie included\\nAvailable in whole beans or ground, you can choose when to order\\nOptimum roast profile for maximum aroma and taste, sweetness and acidity, brown sugar/caramel is preserved while bitterness is in lowest state\\nSpecialty Grade Quality, zero major defect. \\nQuality assurance:\\nIf the product you are shopping for does not match our description, you can claim for a replacement. \\n\\nAll Maharaja Coffee products already have BPOM RI. MD.\\nThe MD number is listed on each package tag. \\n\\nGuaranteed quality, hygienic and high quality.",
      short_description:
        "ARABICA BALI KINTAMANI - Roasted Beans 200 g\\nSpecialty Grade Coffee, Organic Practice, Single oringin, Micro lot, Professionally Roasted to perfection",
      slug: "arabika-bali-182",
      min_order: 0,
      is_merchant_discount: 0,
      discount_amount: 0,
      seller_id: 4,
      product_type_id: 1,
      is_active: 1,
      is_deleted: 0,
      created_at: "2021-12-21T00:29:11.000000Z",
      updated_at: "2021-12-21T00:29:11.000000Z",
      product_type: {
        id: 1,
        name: "Roasted Bean",
        slug: "roasted-bean-2",
        created_at: "2021-12-21T00:00:07.000000Z",
        updated_at: "2021-12-21T00:00:07.000000Z",
      },
      images: [
        {
          id: 13,
          product_id: 10,
          image_url:
            "https://res.cloudinary.com/pt-folka-indonesia-teknologi/image/upload/v1640021385/2020-12-23T08_18_48.634Z_wfbohv.png",
          is_primary: 1,
          created_at: "2021-12-21T00:30:11.000000Z",
          updated_at: "2021-12-21T00:30:11.000000Z",
        },
        {
          id: 14,
          product_id: 10,
          image_url:
            "https://res.cloudinary.com/pt-folka-indonesia-teknologi/image/upload/v1640021403/2020-12-23T08_18_53.095Z_uu7qy5.png",
          is_primary: 0,
          created_at: "2021-12-21T00:30:11.000000Z",
          updated_at: "2021-12-21T00:30:11.000000Z",
        },
      ],
    },
    {
      id: 1,
      name: "Pengalengan Ms. Lychee  - Natural",
      price: 95000,
      description:
        "Origin: Pengalengan - Jawa barat\\nAltitude: 1600 Masl\\nVarietal: Mix Varietal",
      short_description: "Taste:\\nSoft as Lychee , Sweet Candy aftertaste",
      slug: "pengalengan-ms-306",
      min_order: 0,
      is_merchant_discount: 0,
      discount_amount: 0,
      seller_id: 1,
      product_type_id: 1,
      is_active: 1,
      is_deleted: 0,
      created_at: "2021-12-21T00:10:39.000000Z",
      updated_at: "2021-12-21T00:10:39.000000Z",
      product_type: {
        id: 1,
        name: "Roasted Bean",
        slug: "roasted-bean-2",
        created_at: "2021-12-21T00:00:07.000000Z",
        updated_at: "2021-12-21T00:00:07.000000Z",
      },
      images: [
        {
          id: 1,
          product_id: 1,
          image_url:
            "https://res.cloudinary.com/pt-folka-indonesia-teknologi/image/upload/v1640020304/2021-04-07T11_50_15.719Z_odu7jk.jpg",
          is_primary: 1,
          created_at: "2021-12-21T00:11:51.000000Z",
          updated_at: "2021-12-21T00:11:51.000000Z",
        },
      ],
    },
    {
      id: 2,
      name: "Biji Kopi Single Origin Gayo Pantan Musara 178G",
      price: 89000,
      description:
        'Tentang Kopi \\"AVATAR\\"\\nFarmer. Roaster. Brewer.\\n\\nPetani dan proses pascapanen sangat krusial dalam menghasilkan biji kopi yang konsisten dan berkualitas.\\n\\nBiji kopi kemudian disangrai oleh roaster untuk memunculkan potensi citarasa yang maksimal dari biji kopi tersebut.\\n\\nTidak hanya itu, brewer pun berperan penting dalam menghadirkan secangkir kopi yang kaya akan citarasa yang dimilikinya.\\n\\nBerkat terjalinnya komunikasi antara tiga peran penting tersebut, tiga elemen \\"Avatar\\" yaitu gunung, api, dan air kini pun disatukan.\\n\\nNama \\"Avatar\\" juga terinspirasi dari Gayo Avatara Project yang dipelopori Hendra Maulizar dalam melakukan proses pascapanen, dimana beliau sangat menekankan komunikasi erat dari hulu - hilir produksi biji kopi.\\n\\nKemasan kopi selain termasuk micro-magazine yang berisi semua detail juga cerita lainnya tentang perjalanan biji kopi ini dari hulu hingga hilir, juga sudah termasuk resep seduh yang dibuat secara eksklusif oleh Hiro Panji Lesmana.',
      short_description:
        '\\"AVATAR Gayo\\"\\nSingle Origin Arabica Coffee\\nNetto: 178g\\n\\nNama Kopi: Gayo Pantan Musara\\nDaerah: Pantan Musara, Gayo\\nKetinggian: 1640 mdpl\\nProsesor: Hend',
      slug: "avatar-biji-217",
      min_order: 0,
      is_merchant_discount: 0,
      discount_amount: 0,
      seller_id: 2,
      product_type_id: 1,
      is_active: 1,
      is_deleted: 0,
      created_at: "2021-12-21T00:13:44.000000Z",
      updated_at: "2021-12-21T00:13:44.000000Z",
      product_type: {
        id: 1,
        name: "Roasted Bean",
        slug: "roasted-bean-2",
        created_at: "2021-12-21T00:00:07.000000Z",
        updated_at: "2021-12-21T00:00:07.000000Z",
      },
      images: [
        {
          id: 2,
          product_id: 2,
          image_url:
            "https://res.cloudinary.com/pt-folka-indonesia-teknologi/image/upload/v1640017022/2021-01-04T08_21_24.476Z_xkpqzm.png",
          is_primary: 1,
          created_at: "2021-12-21T00:14:07.000000Z",
          updated_at: "2021-12-21T00:14:07.000000Z",
        },
      ],
    },
    {
      id: 3,
      name: '\\"BERKELANA DI PULAU DEWATA\\" - Biji Kopi Single Origin Bali Kintamani 178G',
      price: 70000,
      description:
        'Tentang Kopi \\"Berkelana di Pulau Dewata\\":\\nBali tidak hanya dikenal dengan pantai dan pemandangan gunung berapinya, tetapi juga menghasilkan kopi yang clean dengan mild acidity dan sweetness. Karakteristik khusus dari kopi Kintamani adalah meskipun keasamannya relatif lebih tinggi, Anda bisa langsung merasakannya di mulut kopi ini terasa agak ringan, tanpa ada kepahitan yang menonjol. Kopi Kintamani memberikan kombinasi antara body sedang dan aroma buah yang jelas membuat kopi ini agak eksotis menampilkan rasa citrus, seperti lemon atau orange.',
      short_description:
        '\\"Berkelana di Pulau Dewata\\"\\nSingle Origin Arabica Coffee\\nNetto: 178g\\n\\nNama Kopi: Bali Kintamani AB\\nDaerah: Bila Village, Bali\\nKetinggian: 1,200-1,300 ',
      slug: "berkelana-di-224",
      min_order: 0,
      is_merchant_discount: 0,
      discount_amount: 0,
      seller_id: 2,
      product_type_id: 1,
      is_active: 1,
      is_deleted: 0,
      created_at: "2021-12-21T00:15:33.000000Z",
      updated_at: "2021-12-21T00:15:33.000000Z",
      product_type: {
        id: 1,
        name: "Roasted Bean",
        slug: "roasted-bean-2",
        created_at: "2021-12-21T00:00:07.000000Z",
        updated_at: "2021-12-21T00:00:07.000000Z",
      },
      images: [
        {
          id: 3,
          product_id: 3,
          image_url:
            "https://res.cloudinary.com/pt-folka-indonesia-teknologi/image/upload/v1640017022/2021-01-04T08_21_24.476Z_xkpqzm.png",
          is_primary: 1,
          created_at: "2021-12-21T00:16:13.000000Z",
          updated_at: "2021-12-21T00:16:13.000000Z",
        },
        {
          id: 4,
          product_id: 3,
          image_url:
            "https://res.cloudinary.com/pt-folka-indonesia-teknologi/image/upload/v1640020596/2021-02-08T03_43_05.772Z_cmdmlv.png",
          is_primary: 0,
          created_at: "2021-12-21T00:16:53.000000Z",
          updated_at: "2021-12-21T00:16:53.000000Z",
        },
      ],
    },
    {
      id: 4,
      name: '\\"CLASSIC GAYO ESPRESSO\\" - Biji Kopi Single Origin Gayo Aceh Tengah 178G',
      price: 65000,
      description:
        'Tentang Kopi \\"Classic Gayo Espresso\\":\\nKopi Gayo yang paling laris dan disukai oleh segala kalangan. Bersumber langsung dari Pak Subhan, petani di Aceh Tengah, kualitas dijaga untuk tetap konsisten dan berkelanjutan.',
      short_description:
        '\\"Classic Gayo Espresso\\"\\nSingle Origin Arabica Coffee\\nNetto: 178g\\n\\nNama Kopi: Gayo Aceh Tengah\\nDaerah: Takengon, Aceh Tengah\\nKetinggian: 1,500 mdpl\\nPro',
      slug: "classic-gayo-222",
      min_order: 0,
      is_merchant_discount: 0,
      discount_amount: 0,
      seller_id: 2,
      product_type_id: 1,
      is_active: 1,
      is_deleted: 0,
      created_at: "2021-12-21T00:18:30.000000Z",
      updated_at: "2021-12-21T00:18:30.000000Z",
      product_type: {
        id: 1,
        name: "Roasted Bean",
        slug: "roasted-bean-2",
        created_at: "2021-12-21T00:00:07.000000Z",
        updated_at: "2021-12-21T00:00:07.000000Z",
      },
      images: [
        {
          id: 5,
          product_id: 4,
          image_url:
            "https://res.cloudinary.com/pt-folka-indonesia-teknologi/image/upload/v1640020708/2021-01-04T08_33_15.396Z_vmh8fo.png",
          is_primary: 1,
          created_at: "2021-12-21T00:18:48.000000Z",
          updated_at: "2021-12-21T00:18:48.000000Z",
        },
      ],
    },
    {
      id: 5,
      name: '\\"PURNAMA TANEUH SUNDA\\" - Biji Kopi Single Origin Sunda Shortberry 178G',
      price: 67000,
      description:
        "Tentang Kopi Sunda Short Berry dan Koperasi Klasik Beans:\\nHasil bumi taneuh Sunda ini berisi biji berukuran kecil dengan mayoritas peaberry yang bulat menyerupai rupa bulan purnama. Sama seperti kehadiran Klasik Beans, yang diketuai oleh Pak Eko Purnomowidi, selalu aktif memperjuangkan kehidupan petani yang berkelanjutan bagai bulan purnama yang menerangi malam.",
      short_description:
        "“Purnama Taneuh Sunda”\\nSingle Origin Arabica Coffee\\nNetto: 178g\\n\\nNama Kopi: Sunda Short Berry\\nDaerah: Ciwidey, Jawa Barat\\nKetinggian: 1.500 masl\\nVarie",
      slug: "purnama-taneuh-221",
      min_order: 0,
      is_merchant_discount: 0,
      discount_amount: 0,
      seller_id: 2,
      product_type_id: 1,
      is_active: 1,
      is_deleted: 0,
      created_at: "2021-12-21T00:19:53.000000Z",
      updated_at: "2021-12-21T00:19:53.000000Z",
      product_type: {
        id: 1,
        name: "Roasted Bean",
        slug: "roasted-bean-2",
        created_at: "2021-12-21T00:00:07.000000Z",
        updated_at: "2021-12-21T00:00:07.000000Z",
      },
      images: [
        {
          id: 6,
          product_id: 5,
          image_url:
            "https://res.cloudinary.com/pt-folka-indonesia-teknologi/image/upload/v1640020813/2021-01-04T08_29_42.547Z_rhg8do.png",
          is_primary: 1,
          created_at: "2021-12-21T00:20:20.000000Z",
          updated_at: "2021-12-21T00:20:20.000000Z",
        },
      ],
    },
    {
      id: 6,
      name: '\\"ROMANSA\\" - Biji Kopi Single Origin Sunda Aromanis 178G',
      price: 89000,
      description:
        'Tentang Kopi “Romansa Sundanis\\" dan Klasik Beans:\\nDimulai dari passion pak Eko Purnomowidi bersama delapan temannya, mereka telah menciptakan romansa di tanah Sunda dengan tak hanya impian tetapi telah diwujudkan menjadi realita dengan membangun ladang dan tempat proses pascapanen kopi dengan cara-cara yang berkelanjutan.(sustainable).\\n\\nKopi yang dihasilkan oleh petani di bawah naungan Klasik Beans yang dibangun pak Eko bersama temannya, dibina untuk menjaga keseimbangan dan kearifan alam lingkungan tempat kopi bertumbuh. Semua kopi ditanam dan dilestarikan tanpa pestisida ataupun pupuk kimia.\\n\\nNama \\"ROMANSA\\" ini melambangkan hubungan kebersamaan antar para petani yang ada dalam naungan koperasi Klasik Beans, juga hubungan romansa antara pak Eko dengan para anggota koperasi, serta hubungan antar kita semua dengan alam yang terus kita jaga untuk menghasilkan biji kopi berkualitas dan berkepanjangan',
      short_description:
        '\\"ROMANSA Ciwidey\\"\\nSingle Origin Arabica Coffee\\nNetto: 178g\\n\\nNama Kopi: Klasik Sunda Aromanis\\nDaerah: Ciwidey, Jawa Barat\\nKetinggian: 1,500 mdpl\\nVariet',
      slug: "romansa-biji-220",
      min_order: 0,
      is_merchant_discount: 0,
      discount_amount: 0,
      seller_id: 2,
      product_type_id: 1,
      is_active: 1,
      is_deleted: 0,
      created_at: "2021-12-21T00:21:28.000000Z",
      updated_at: "2021-12-21T00:21:28.000000Z",
      product_type: {
        id: 1,
        name: "Roasted Bean",
        slug: "roasted-bean-2",
        created_at: "2021-12-21T00:00:07.000000Z",
        updated_at: "2021-12-21T00:00:07.000000Z",
      },
      images: [
        {
          id: 7,
          product_id: 6,
          image_url:
            "https://res.cloudinary.com/pt-folka-indonesia-teknologi/image/upload/v1640020912/2021-01-04T08_24_32.608Z_yhz60x.png",
          is_primary: 1,
          created_at: "2021-12-21T00:22:02.000000Z",
          updated_at: "2021-12-21T00:22:02.000000Z",
        },
      ],
    },
    {
      id: 7,
      name: '\\"TITIK CERAH DI LEMBAH SOLOK\\" - Biji Kopi Single Origin Yellow Radjo 178G',
      price: 70000,
      description:
        "Tentang Kopi Yellow Radjo dan Koperasi Solok Radjo:\\nMelihat betapa rendahnya harga kopi hasil dari petani di Solok, Pak Alfadriansyah memulai Koperasi Produsen Solok Radjo di Kabupaten Solok. Solok Radjo merupakan organisasi agribisnis yang fokus pada pengembangan kopi arabika di Sumatera Barat. Organisasi tersebut terdiri dari kumpulan petani, penyuluh, pedagang dan pengamat yang mempunyai satu visi yaitu pengembangan dengan orientasi pertanian berkelanjutan.\\n\\nSejak tahun 2013, kelompok yang terdiri dari pemuda-pemudi sekitaran umur 30an, telah berhasil meningkatkan produksi berkali-lipat dengan harga yang sangat tinggi. Keberadaan mereka memberi titik cerah untuk 887 petani di bawah naungan koperasi tersebut dengan kesejahteraan mereka meningkat dan nama Solok Radjo pun makin terkenal di dalam maupun di luar negeri.",
      short_description:
        "“Titik Cerah di Lembah Solok”\\nSingle Origin Arabica Coffee\\nNetto: 178g\\n\\nNama Kopi: Yellow Radjo\\nDaerah: Lembah Gumanti, West Sumatra\\nKetinggian: 1.500",
      slug: "titik-cerah-223",
      min_order: 0,
      is_merchant_discount: 0,
      discount_amount: 0,
      seller_id: 2,
      product_type_id: 1,
      is_active: 1,
      is_deleted: 0,
      created_at: "2021-12-21T00:23:04.000000Z",
      updated_at: "2021-12-21T00:23:04.000000Z",
      product_type: {
        id: 1,
        name: "Roasted Bean",
        slug: "roasted-bean-2",
        created_at: "2021-12-21T00:00:07.000000Z",
        updated_at: "2021-12-21T00:00:07.000000Z",
      },
      images: [
        {
          id: 8,
          product_id: 7,
          image_url:
            "https://res.cloudinary.com/pt-folka-indonesia-teknologi/image/upload/v1640021009/2021-01-04T08_37_01.760Z_pj3xrl.png",
          is_primary: 1,
          created_at: "2021-12-21T00:23:36.000000Z",
          updated_at: "2021-12-21T00:23:36.000000Z",
        },
      ],
    },
  ] as any[];

  const handleDetail = (e: any, data: any) => {
    e.preventDefault();
    localStorage.setItem("detailData", JSON.stringify(data)) as any;
    router.push(`product/${data.id}`);
  };

  useEffect(() => {
    setData(mockData);
  }, []);
  return { data, setData, handleDetail };
}

export default State;
