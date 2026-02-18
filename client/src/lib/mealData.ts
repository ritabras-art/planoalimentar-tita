// Plano Alimentar Tita — Dados estruturados
// Nutricionista: Rosceli Brás - CRN 24402

export interface FoodOption {
  name: string;
  quantity: string;
}

export interface FoodGroup {
  group: string;
  type: "proteina" | "fruta" | "fibra" | "gordura" | "legume" | "carboidrato" | "semente" | "lacteo" | "bebida" | "leguminosa" | "oleaginosa" | "adocante";
  mainOption: FoodOption;
  alternatives: FoodOption[];
  observation?: string;
}

export interface MealOption {
  label: string;
  groups: FoodGroup[];
  recipe?: {
    title: string;
    ingredients: string[];
    instructions: string[];
  };
}

export interface Meal {
  id: string;
  title: string;
  icon: string;
  timeHint: string;
  image: string;
  options?: MealOption[];
  groups?: FoodGroup[];
  recipes?: {
    title: string;
    ingredients: string[];
    instructions: string[];
  }[];
}

export interface RoutineTip {
  title: string;
  description: string;
  icon: string;
}

export interface Recipe {
  id: string;
  title: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  servings: string;
  prepTime: string;
  category?: string;
}

export const HERO_IMAGE = "https://private-us-east-1.manuscdn.com/sessionFile/WSXu2sUj0lnWuGlEy2r4Wv/sandbox/rspxJ6ceE3DQvZouHnCSBi-img-1_1770777389000_na1fn_aGVyby1iYW5uZXI.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvV1NYdTJzVWowbG5XdUdsRXkycjRXdi9zYW5kYm94L3JzcHhKNmNlRTNEUXZab3VIbkNTQmktaW1nLTFfMTc3MDc3NzM4OTAwMF9uYTFmbl9hR1Z5YnkxaVlXNXVaWEkuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=iiNg16q~WryRG0Vl9WLpvi5nm86SbNFX3jTM5w4mqFBT17W9vG-9B6Aqv9y2l5mBJXrYYgpRggFhO~e93fA5MgfPXUGIgKooW0J3aigQCJ21ljkZINXGDwxE3jIb9wYN6gxpLyqK49jDA-Ke7fKxHZK~E3BE9Zn4mNwX9H8KE4BT6~ygkFrBCrqu2US5GxqGPSNJh3PWX99o6b5YunRzYGZ~bPRIhyNNHMgmyEqTd9E56NH3cvoxAs2uM2GPGk6O49oANjQ7ZDCV0zp8hybyIz-nuG6Do5nNZjT-1fOMqoSokbC3aJWy9~g9l7sKpqbKSYQKxWcT9zUVISiUgq746Q__";

export const MEAL_IMAGES = {
  desjejum: "https://private-us-east-1.manuscdn.com/sessionFile/WSXu2sUj0lnWuGlEy2r4Wv/sandbox/rspxJ6ceE3DQvZouHnCSBi-img-2_1770777381000_na1fn_ZGVzamVqdW0.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvV1NYdTJzVWowbG5XdUdsRXkycjRXdi9zYW5kYm94L3JzcHhKNmNlRTNEUXZab3VIbkNTQmktaW1nLTJfMTc3MDc3NzM4MTAwMF9uYTFmbl9aR1Z6YW1WcWRXMC5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=oKxKSQiR52DRVvjH-KGeycawpsEUiLg5tSQdvQy5uhQDtxFLdDmECmDUOpP5I0k2KBSPQ3Qd6Bi0K7xFCMkmN007622zGmN2b2z6ZvyTDI08cyy4haethJzkg7wcwuTaOWZuvaV~zaXVcMZCAUqYcr41FtF4N4nLPv~vAVtntgHPMTbV~ijrQMdA4PTcGOqpajrxiVsq1uJzBQwPcgS4zQxGQC6QZwO-9YBPtm365Pr5qFit9opd8VODuQ3ZF4rMaqBKXWuMaxE1GpU5OqknP1PFd~XkbLbEzMU4WtITeWnO0DAmvqykzpr0kaxnoLcSp29hNlBORXS6-YT2vSXNGg__",
  almoco: "https://private-us-east-1.manuscdn.com/sessionFile/WSXu2sUj0lnWuGlEy2r4Wv/sandbox/rspxJ6ceE3DQvZouHnCSBi-img-3_1770777388000_na1fn_YWxtb2Nv.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvV1NYdTJzVWowbG5XdUdsRXkycjRXdi9zYW5kYm94L3JzcHhKNmNlRTNEUXZab3VIbkNTQmktaW1nLTNfMTc3MDc3NzM4ODAwMF9uYTFmbl9ZV3h0YjJOdi5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=AR4Q00pMlhrkV~bH-~lrsgo6~J96H7KAPaydAwf30BSy8sb4MZaNvj-AfTf-M2ncccTVbL6BqANHCIaNME9ztHtTTDYXHNGslnjt6Y-wk~~ZGCLFylDlZIHQ69tJmOyUYtybtjd-l0EzyBPjRXeinOfOP6XMvGMajmbyZI~e9diJsH1nmgca0FHIZKw7my946pLhfWoENrwVw0WpyuhJ7ebvaEWsRFp33K3emZSjtkojxPNjn4wbOZ4Yw6qY-9J5-kI4B-FNz9rW~fAT7NUic2NhS4bx8qGmMj4vkoNvXHgCt3awlZfvan1LCVD~74AVsH3rnDlWKtAUnaDbiXLk3Q__",
  lanche: "https://private-us-east-1.manuscdn.com/sessionFile/WSXu2sUj0lnWuGlEy2r4Wv/sandbox/rspxJ6ceE3DQvZouHnCSBi-img-4_1770777383000_na1fn_bGFuY2hl.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvV1NYdTJzVWowbG5XdUdsRXkycjRXdi9zYW5kYm94L3JzcHhKNmNlRTNEUXZab3VIbkNTQmktaW1nLTRfMTc3MDc3NzM4MzAwMF9uYTFmbl9iR0Z1WTJobC5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=hr52xWbfUtrhbTTyMOXEgnHBqI4npPPiQM4B~x2xqcjwknII7Bi8-64jM5azrEtkvwFX4opYR3hx9zGNMM7lwTynLoM3ZsRtmHKJoC~eZmZN50sDe4jEJHySsLWIGejEf1Ku-SCyeDY7CXJN-R2zqC0t9EewUzutSx4~wdQFTdxRErOIOB4AjiDwaxR1lo9qDtD1Re~~LoUWc84ypH1pC-vI2IhieNwWIQ5j5w89vFUWJ~~zfv7P4mWBJbR6HkKCo~5Vqhf-AYNeQXW9c6s~ebzPwiRlrQtWH0s3DfM7JdSYQe1DvCCdiEZLrSrX5lWP6OsjfJdQPPq2WU03tZ5cbw__",
  jantar: "https://private-us-east-1.manuscdn.com/sessionFile/WSXu2sUj0lnWuGlEy2r4Wv/sandbox/rspxJ6ceE3DQvZouHnCSBi-img-5_1770777388000_na1fn_amFudGFy.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvV1NYdTJzVWowbG5XdUdsRXkycjRXdi9zYW5kYm94L3JzcHhKNmNlRTNEUXZab3VIbkNTQmktaW1nLTVfMTc3MDc3NzM4ODAwMF9uYTFmbl9hbUZ1ZEdGeS5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=lgeFPIZFrBubYYhg23hL~Ceil19qJ7qNiUTO2xmg11-xGRHOoNCx~1LfYnFdVysSqW6Vlu7BC8frdkfDfKMmosE5ULjQi~ZRt0BY98kpPaC-O6n9I0r4xcGgAquWrB9lPAnl2FW41NkUO-fNpmZglG0UVd-Dx2aMGU8bBWkqsiwO4Xxpu3eD12faONRycgM4ohxqfFx6GLB7zIkbZQvyhSuaSTRMWhZuMln~~zYtsxAPUJaSBnpDHfUq~dBXQJcF3kzbCafcKfOmbzwUM3UFwC-3Jq-lull-LBXTUkdxb-fVrvIBwiQFwd1LHArr4Mv3O1FksKjzD67Kmg8vMONE0g__",
};

export const routineTips: RoutineTip[] = [
  {
    title: "Ovos no Desjejum",
    description: "Os ovos podem ser feitos com azeite ou manteiga, seguindo as devidas proporções. Consumir uma parte dos ovos no começo do Desjejum, as frutas e posteriormente o restante.",
    icon: "utensils",
  },
  {
    title: "Salada no Almoço",
    description: "Regar a salada com azeite e limão para melhor absorção dos nutrientes. Consumir pelo menos 2 tipos de verdura.",
    icon: "salad",
  },
  {
    title: "Mix de Sementes",
    description: "Ingerir as sementes juntamente com a comida. Poderá fazer um mix de sementes, totalizando 10g na pesagem (ex: semente de girassol, semente de abóbora, gergelim, linhaça).",
    icon: "heart",
  },
  {
    title: "Psyllium",
    description: "Utilizar Psyllium 5g no Jantar (opção 1) para auxiliar na saciedade e no funcionamento intestinal.",
    icon: "droplets",
  },
  {
    title: "Hidratação",
    description: "Beber de 300 a 500mL de água ao acordar. Use garrafa de aço inoxidável ou vidro. A água regula o apetite e elimina toxinas.",
    icon: "droplets",
  },
  {
    title: "Consistência",
    description: "A consistência vence a perfeição. Erros pontuais não anulam o processo — o importante é voltar ao foco.",
    icon: "heart",
  },
];

export const meals: Meal[] = [
  // ==========================================
  // DESJEJUM — Refeição única (sem opções)
  // ==========================================
  {
    id: "desjejum",
    title: "Desjejum",
    icon: "sunrise",
    timeHint: "Manhã",
    image: MEAL_IMAGES.desjejum,
    groups: [
      {
        group: "Proteína",
        type: "proteina",
        mainOption: { name: "Ovo de galinha", quantity: "2 unidades (120g)" },
        alternatives: [],
      },
      {
        group: "Fruta",
        type: "fruta",
        mainOption: { name: "Mamão papaia", quantity: "100g" },
        alternatives: [
          { name: "Melão", quantity: "1,5 fatias médias (146g)" },
          { name: "Kiwi", quantity: "0,5 unidade (60g)" },
          { name: "Abacaxi", quantity: "1 rodela pequena (76g)" },
        ],
      },
      {
        group: "Fruta Extra",
        type: "fruta",
        mainOption: { name: "Mamão papaia", quantity: "100g" },
        alternatives: [],
        observation: "Consumir junto com os ovos e a fibra",
      },
      {
        group: "Fibra",
        type: "fibra",
        mainOption: { name: "Farelo de aveia", quantity: "20g" },
        alternatives: [
          { name: "Semente de chia (Mãe Terra®)", quantity: "2 colheres de chá (12g)" },
          { name: "Quinua em flocos orgânica (Mãe Terra®)", quantity: "1 colher de sopa (17g)" },
        ],
      },
      {
        group: "Gordura Boa",
        type: "gordura",
        mainOption: { name: "Manteiga com sal", quantity: "1 colher de chá (4g)" },
        alternatives: [
          { name: "Azeite de oliva", quantity: "0,5 colher de sopa média (3ml)" },
          { name: "Queijo mozarela", quantity: "0,5 fatia (8g)" },
        ],
      },
    ],
  },

  // ==========================================
  // ALMOÇO — Refeição única (sem opções)
  // ==========================================
  {
    id: "almoco",
    title: "Almoço",
    icon: "sun",
    timeHint: "12h — 13h",
    image: MEAL_IMAGES.almoco,
    groups: [
      {
        group: "Legumes",
        type: "legume",
        mainOption: { name: "Legumes refogados mistos", quantity: "120g" },
        alternatives: [],
      },
      {
        group: "Carboidrato",
        type: "carboidrato",
        mainOption: { name: "Arroz branco (cozido)", quantity: "100g" },
        alternatives: [
          { name: "Batata inglesa cozida", quantity: "1,5 unidades médias (230g)" },
          { name: "Macarrão de arroz cozido", quantity: "4 colheres de sopa cheias (115g)" },
        ],
      },
      {
        group: "Proteína",
        type: "proteina",
        mainOption: { name: "Frango, peito, sem pele, cozido", quantity: "80g" },
        alternatives: [
          { name: "Carne bovina patinho, sem gordura, grelhado", quantity: "58g" },
          { name: "Filé de peixe grelhado", quantity: "1 unidade (104g)" },
          { name: "Frango, coxa com sobrecoxa, carne e pele, cozido/assado", quantity: "0,5 pedaço (54g)" },
        ],
      },
      {
        group: "Sementes",
        type: "semente",
        mainOption: { name: "Semente de abóbora", quantity: "10g" },
        alternatives: [
          { name: "Semente de girassol seca", quantity: "1 colher de sopa (9g)" },
          { name: "Gergelim, sementes", quantity: "1 colher de sopa (9g)" },
        ],
        observation: "Poderá fazer um mix de sementes, totalizando 10g na pesagem.",
      },
      {
        group: "Fruta",
        type: "fruta",
        mainOption: { name: "Abacaxi", quantity: "150g" },
        alternatives: [
          { name: "Laranja pêra crua", quantity: "1 unidade média (171g)" },
          { name: "Tangerina", quantity: "140g" },
        ],
      },
    ],
  },

  // ==========================================
  // LANCHE DA TARDE — 3 opções
  // ==========================================
  {
    id: "lanche",
    title: "Lanche da Tarde",
    icon: "cookie",
    timeHint: "15h — 16h",
    image: MEAL_IMAGES.lanche,
    options: [
      {
        label: "Opção 1 — Vitamina",
        groups: [
          {
            group: "Bebida Vegetal",
            type: "bebida",
            mainOption: { name: "Leite de aveia A Tal da Castanha", quantity: "150ml" },
            alternatives: [],
          },
          {
            group: "Fruta",
            type: "fruta",
            mainOption: { name: "Banana prata", quantity: "70g" },
            alternatives: [],
          },
          {
            group: "Fibra",
            type: "fibra",
            mainOption: { name: "Farelo de aveia", quantity: "10g" },
            alternatives: [],
          },
          {
            group: "Proteína",
            type: "proteina",
            mainOption: { name: "100% Pure Whey (Probiótica®)", quantity: "10g" },
            alternatives: [],
          },
        ],
      },
      {
        label: "Opção 2 — Iogurte com Frutas",
        groups: [
          {
            group: "Lácteo",
            type: "lacteo",
            mainOption: { name: "Iogurte desnatado", quantity: "150ml" },
            alternatives: [],
          },
          {
            group: "Fruta",
            type: "fruta",
            mainOption: { name: "Banana prata", quantity: "70g" },
            alternatives: [
              { name: "Kiwi", quantity: "1 unidade (113g)" },
              { name: "Uva itália crua", quantity: "12 unidades médias (121g)" },
            ],
          },
          {
            group: "Fibra",
            type: "fibra",
            mainOption: { name: "Farelo de aveia", quantity: "1 colher de sopa (10g)" },
            alternatives: [],
          },
        ],
      },
      {
        label: "Opção 3 — Ovo com Pão",
        groups: [
          {
            group: "Proteína",
            type: "proteina",
            mainOption: { name: "Ovo de galinha inteiro, cozido/mexido", quantity: "1 unidade (60g)" },
            alternatives: [],
          },
          {
            group: "Carboidrato",
            type: "carboidrato",
            mainOption: { name: "Pão francês", quantity: "32g" },
            alternatives: [
              { name: "Goma de tapioca", quantity: "1,5 colheres de sopa cheias (30g)" },
              { name: "Biscoito de polvilho (bolinha)", quantity: "0,5 pacote (29g)" },
              { name: "Biscoito de arroz", quantity: "4 unidades (24g)" },
            ],
          },
        ],
      },
    ],
  },

  // ==========================================
  // JANTAR — 3 opções
  // ==========================================
  {
    id: "jantar",
    title: "Jantar",
    icon: "moon",
    timeHint: "19h — 20h",
    image: MEAL_IMAGES.jantar,
    options: [
      {
        label: "Opção 1 — Refeição Completa",
        groups: [
          {
            group: "Carboidrato",
            type: "carboidrato",
            mainOption: { name: "Arroz branco (cozido)", quantity: "80g" },
            alternatives: [
              { name: "Cuscuz de milho cozido com sal", quantity: "1 unidade média (88g)" },
              { name: "Macarrão de arroz cozido", quantity: "3 colheres de sopa cheias (92g)" },
              { name: "Mandioca cozida", quantity: "2,5 pedaços pequenos (80g)" },
              { name: "Batata doce cozida", quantity: "0,5 unidade média (84g)" },
              { name: "Inhame cozido", quantity: "0,5 unidade (82g)" },
              { name: "Batata inglesa cozida", quantity: "2 unidades médias (190g)" },
            ],
          },
          {
            group: "Proteína",
            type: "proteina",
            mainOption: { name: "Frango, peito, sem pele, cozido", quantity: "80g" },
            alternatives: [
              { name: "Carne bovina patinho, sem gordura, grelhado", quantity: "0,5 bife médio (58g)" },
              { name: "Filé de peixe grelhado", quantity: "1 unidade (104g)" },
              { name: "Ovo de galinha", quantity: "1,5 unidades (78g)" },
            ],
          },
          {
            group: "Fruta",
            type: "fruta",
            mainOption: { name: "Laranja baía crua", quantity: "60g" },
            alternatives: [
              { name: "Melão cru", quantity: "1 fatia média (100g)" },
              { name: "Kiwi cru", quantity: "0,5 unidade média (58g)" },
            ],
          },
          {
            group: "Fibra",
            type: "fibra",
            mainOption: { name: "Psyllium", quantity: "5g" },
            alternatives: [],
            observation: "Utilizar Psyllium 5g",
          },
        ],
      },
      {
        label: "Opção 2 — Iogurte Proteico",
        groups: [
          {
            group: "Lácteo",
            type: "lacteo",
            mainOption: { name: "Iogurte desnatado", quantity: "170ml" },
            alternatives: [],
          },
          {
            group: "Fruta",
            type: "fruta",
            mainOption: { name: "Banana prata", quantity: "70g" },
            alternatives: [
              { name: "Kiwi", quantity: "1 unidade (113g)" },
              { name: "Uva itália crua", quantity: "12 unidades médias (121g)" },
            ],
          },
          {
            group: "Fibra",
            type: "fibra",
            mainOption: { name: "Farelo de aveia", quantity: "1 colher de sopa (10g)" },
            alternatives: [],
          },
          {
            group: "Proteína",
            type: "proteina",
            mainOption: { name: "100% Pure Whey (Probiótica®)", quantity: "20g" },
            alternatives: [],
          },
        ],
      },
      {
        label: "Opção 3 — Vitamina Proteica",
        groups: [
          {
            group: "Bebida Vegetal",
            type: "bebida",
            mainOption: { name: "Leite de aveia A Tal da Castanha", quantity: "200ml" },
            alternatives: [],
          },
          {
            group: "Fruta",
            type: "fruta",
            mainOption: { name: "Banana prata", quantity: "70g" },
            alternatives: [],
          },
          {
            group: "Fibra",
            type: "fibra",
            mainOption: { name: "Farelo de aveia", quantity: "10g" },
            alternatives: [],
          },
          {
            group: "Proteína",
            type: "proteina",
            mainOption: { name: "100% Pure Whey (Probiótica®)", quantity: "20g" },
            alternatives: [],
          },
        ],
      },
    ],
  },
];



export function getGroupColor(type: string): { bg: string; text: string; border: string; badge: string } {
  switch (type) {
    case "proteina":
      return { bg: "bg-terracotta-bg", text: "text-terracotta", border: "border-terracotta-light/30", badge: "bg-terracotta/10 text-terracotta" };
    case "fruta":
      return { bg: "bg-gold-bg", text: "text-gold", border: "border-gold-light/30", badge: "bg-gold/10 text-gold" };
    case "fibra":
      return { bg: "bg-sage-bg", text: "text-sage", border: "border-sage-light/30", badge: "bg-sage/10 text-sage" };
    case "gordura":
      return { bg: "bg-gold-bg", text: "text-brown-light", border: "border-gold-light/30", badge: "bg-brown/5 text-brown-light" };
    case "legume":
      return { bg: "bg-sage-bg", text: "text-olive", border: "border-sage-light/30", badge: "bg-olive-bg text-olive" };
    case "carboidrato":
      return { bg: "bg-gold-bg", text: "text-gold", border: "border-gold-light/30", badge: "bg-gold/10 text-gold" };
    case "semente":
      return { bg: "bg-olive-bg", text: "text-olive", border: "border-sage-light/30", badge: "bg-olive-bg text-olive" };
    case "lacteo":
      return { bg: "bg-cream-dark", text: "text-brown-light", border: "border-border", badge: "bg-cream-dark text-brown-light" };
    case "bebida":
      return { bg: "bg-sage-bg", text: "text-sage", border: "border-sage-light/30", badge: "bg-sage/10 text-sage" };
    case "leguminosa":
      return { bg: "bg-terracotta-bg", text: "text-terracotta", border: "border-terracotta-light/30", badge: "bg-terracotta/10 text-terracotta" };
    case "oleaginosa":
      return { bg: "bg-gold-bg", text: "text-brown-light", border: "border-gold-light/30", badge: "bg-brown/5 text-brown-light" };
    case "adocante":
      return { bg: "bg-gold-bg", text: "text-gold", border: "border-gold-light/30", badge: "bg-gold/10 text-gold" };
    default:
      return { bg: "bg-muted", text: "text-muted-foreground", border: "border-border", badge: "bg-muted text-muted-foreground" };
  }
}
