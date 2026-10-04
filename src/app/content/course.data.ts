import { Topic } from '../core/models/learning.models';

export const TOPICS: Topic[] = [
  {
    "id": "tema-01",
    "order": 1,
    "title": "Números de cuatro cifras",
    "description": "Números de tres y cuatro cifras, ordinales, cálculo mental y problemas.",
    "emoji": "🔢",
    "sections": [
      {
        "id": "tres-cifras",
        "title": "Números de tres cifras",
        "subtitle": "Centenas, decenas, unidades, lectura, descomposición y comparación",
        "kind": "numbers",
        "emoji": "🔢",
        "theory": [
          {
            "type": "text",
            "title": "Centenas, decenas y unidades",
            "text": "Un número de tres cifras está formado por centenas (C), decenas (D) y unidades (U). El valor de una cifra depende de la posición que ocupa."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "1 C = 10 D = 100 U",
              "Ejemplo: 249 = 2 C + 4 D + 9 U",
              "249 = 200 + 40 + 9",
              "Para comparar, mira primero las centenas; si son iguales, las decenas y después las unidades."
            ]
          },
          {
            "type": "place-value",
            "title": "Ejemplo: 427",
            "text": "427 = 4 C + 2 D + 7 U = 400 + 20 + 7. Se lee «cuatrocientos veintisiete».",
            "headers": ["C", "D", "U"],
            "digits": ["4", "2", "7"]
          },
          {
            "type": "tip",
            "title": "Truco MathCrack",
            "text": "Lee de izquierda a derecha y piensa cuánto vale cada cifra por su posición."
          }
        ],
        "questions": [
          {
            "id": "t1-3-0",
            "question": "¿Cuál es la descomposición correcta de 542?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "500-40-2",
                "text": "500 + 40 + 2",
                "correct": true
              },
              {
                "id": "50-4-2",
                "text": "50 + 4 + 2",
                "correct": false
              },
              {
                "id": "500-4-2",
                "text": "500 + 4 + 2",
                "correct": false
              },
              {
                "id": "50-400-2",
                "text": "50 + 400 + 2",
                "correct": false
              }
            ],
            "explanation": "Descomponemos según el valor de cada cifra: millares, centenas, decenas y unidades."
          },
          {
            "id": "t1-3-1",
            "question": "¿Cuál es la descomposición correcta de 356?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "300-50-6",
                "text": "300 + 50 + 6",
                "correct": true
              },
              {
                "id": "30-5-6",
                "text": "30 + 5 + 6",
                "correct": false
              },
              {
                "id": "300-5-6",
                "text": "300 + 5 + 6",
                "correct": false
              },
              {
                "id": "30-500-6",
                "text": "30 + 500 + 6",
                "correct": false
              }
            ],
            "explanation": "Descomponemos según el valor de cada cifra: millares, centenas, decenas y unidades."
          },
          {
            "id": "t1-3-2",
            "question": "¿Cuál es la descomposición correcta de 570?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "500-70-0",
                "text": "500 + 70 + 0",
                "correct": true
              },
              {
                "id": "50-7-0",
                "text": "50 + 7 + 0",
                "correct": false
              },
              {
                "id": "500-7-0",
                "text": "500 + 7 + 0",
                "correct": false
              },
              {
                "id": "50-700-0",
                "text": "50 + 700 + 0",
                "correct": false
              }
            ],
            "explanation": "Descomponemos según el valor de cada cifra: millares, centenas, decenas y unidades."
          },
          {
            "id": "t1-3-3",
            "question": "¿Cuál es la descomposición correcta de 591?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "500-90-1",
                "text": "500 + 90 + 1",
                "correct": true
              },
              {
                "id": "50-9-1",
                "text": "50 + 9 + 1",
                "correct": false
              },
              {
                "id": "500-9-1",
                "text": "500 + 9 + 1",
                "correct": false
              },
              {
                "id": "50-900-1",
                "text": "50 + 900 + 1",
                "correct": false
              }
            ],
            "explanation": "Descomponemos según el valor de cada cifra: millares, centenas, decenas y unidades."
          },
          {
            "id": "t1-3-4",
            "question": "¿Cuál es la descomposición correcta de 904?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "900-0-4",
                "text": "900 + 0 + 4",
                "correct": true
              },
              {
                "id": "90-0-4",
                "text": "90 + 0 + 4",
                "correct": false
              },
              {
                "id": "900-0-4",
                "text": "900 + 0 + 4",
                "correct": false
              },
              {
                "id": "90-0-4",
                "text": "90 + 0 + 4",
                "correct": false
              }
            ],
            "explanation": "Descomponemos según el valor de cada cifra: millares, centenas, decenas y unidades."
          },
          {
            "id": "t1-3-5",
            "question": "¿Cuál es la descomposición correcta de 215?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "200-10-5",
                "text": "200 + 10 + 5",
                "correct": true
              },
              {
                "id": "20-1-5",
                "text": "20 + 1 + 5",
                "correct": false
              },
              {
                "id": "200-1-5",
                "text": "200 + 1 + 5",
                "correct": false
              },
              {
                "id": "20-100-5",
                "text": "20 + 100 + 5",
                "correct": false
              }
            ],
            "explanation": "Descomponemos según el valor de cada cifra: millares, centenas, decenas y unidades."
          },
          {
            "id": "t1-3-6",
            "question": "¿Cuál es la descomposición correcta de 949?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "900-40-9",
                "text": "900 + 40 + 9",
                "correct": true
              },
              {
                "id": "90-4-9",
                "text": "90 + 4 + 9",
                "correct": false
              },
              {
                "id": "900-4-9",
                "text": "900 + 4 + 9",
                "correct": false
              },
              {
                "id": "90-400-9",
                "text": "90 + 400 + 9",
                "correct": false
              }
            ],
            "explanation": "Descomponemos según el valor de cada cifra: millares, centenas, decenas y unidades."
          },
          {
            "id": "t1-3-7",
            "question": "¿Cuál es la descomposición correcta de 702?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "700-0-2",
                "text": "700 + 0 + 2",
                "correct": true
              },
              {
                "id": "70-0-2",
                "text": "70 + 0 + 2",
                "correct": false
              },
              {
                "id": "700-0-2",
                "text": "700 + 0 + 2",
                "correct": false
              },
              {
                "id": "70-0-2",
                "text": "70 + 0 + 2",
                "correct": false
              }
            ],
            "explanation": "Descomponemos según el valor de cada cifra: millares, centenas, decenas y unidades."
          }
        ]
      },
      {
        "id": "cuatro-cifras",
        "title": "Números de cuatro cifras",
        "subtitle": "Unidades de millar, lectura, escritura, descomposición y comparación",
        "kind": "numbers",
        "emoji": "🧮",
        "theory": [
          {
            "type": "text",
            "title": "La unidad de millar",
            "text": "Los números de cuatro cifras tienen unidades de millar (UM), centenas, decenas y unidades."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "1 UM = 10 C",
              "1 UM = 1.000 U",
              "1.342 = 1 UM + 3 C + 4 D + 2 U",
              "1.342 = 1.000 + 300 + 40 + 2"
            ]
          },
          {
            "type": "place-value",
            "title": "Ejemplo: 1.342",
            "text": "1.342 = 1 UM + 3 C + 4 D + 2 U = 1.000 + 300 + 40 + 2. Se lee «mil trescientos cuarenta y dos».",
            "headers": ["UM", "C", "D", "U"],
            "digits": ["1", "3", "4", "2"]
          },
          {
            "type": "place-value",
            "title": "Otro ejemplo: 6.302",
            "text": "6.302 = 6 UM + 3 C + 0 D + 2 U = 6.000 + 300 + 0 + 2. El 0 ocupa el lugar de las decenas.",
            "headers": ["UM", "C", "D", "U"],
            "digits": ["6", "3", "0", "2"]
          },
          {
            "type": "tip",
            "title": "Truco MathCrack",
            "text": "Cuando una posición vale cero, no desaparece: indica que no hay unidades de ese orden."
          }
        ],
        "questions": [
          {
            "id": "t1-4-0",
            "question": "¿Cuál es la descomposición correcta de 1.342?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "1-000-300-40-2",
                "text": "1.000 + 300 + 40 + 2",
                "correct": true
              },
              {
                "id": "100-30-4-2",
                "text": "100 + 30 + 4 + 2",
                "correct": false
              },
              {
                "id": "1-000-300-4-2",
                "text": "1.000 + 300 + 4 + 2",
                "correct": false
              },
              {
                "id": "1-000-30-400-2",
                "text": "1.000 + 30 + 400 + 2",
                "correct": false
              }
            ],
            "explanation": "Descomponemos según el valor de cada cifra: millares, centenas, decenas y unidades."
          },
          {
            "id": "t1-4-1",
            "question": "¿Cuál es la descomposición correcta de 2.056?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "2-000-0-50-6",
                "text": "2.000 + 0 + 50 + 6",
                "correct": true
              },
              {
                "id": "200-0-5-6",
                "text": "200 + 0 + 5 + 6",
                "correct": false
              },
              {
                "id": "2-000-0-5-6",
                "text": "2.000 + 0 + 5 + 6",
                "correct": false
              },
              {
                "id": "2-000-0-500-6",
                "text": "2.000 + 0 + 500 + 6",
                "correct": false
              }
            ],
            "explanation": "Descomponemos según el valor de cada cifra: millares, centenas, decenas y unidades."
          },
          {
            "id": "t1-4-2",
            "question": "¿Cuál es la descomposición correcta de 4.070?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "4-000-0-70-0",
                "text": "4.000 + 0 + 70 + 0",
                "correct": true
              },
              {
                "id": "400-0-7-0",
                "text": "400 + 0 + 7 + 0",
                "correct": false
              },
              {
                "id": "4-000-0-7-0",
                "text": "4.000 + 0 + 7 + 0",
                "correct": false
              },
              {
                "id": "4-000-0-700-0",
                "text": "4.000 + 0 + 700 + 0",
                "correct": false
              }
            ],
            "explanation": "Descomponemos según el valor de cada cifra: millares, centenas, decenas y unidades."
          },
          {
            "id": "t1-4-3",
            "question": "¿Cuál es la descomposición correcta de 5.891?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "5-000-800-90-1",
                "text": "5.000 + 800 + 90 + 1",
                "correct": true
              },
              {
                "id": "500-80-9-1",
                "text": "500 + 80 + 9 + 1",
                "correct": false
              },
              {
                "id": "5-000-800-9-1",
                "text": "5.000 + 800 + 9 + 1",
                "correct": false
              },
              {
                "id": "5-000-80-900-1",
                "text": "5.000 + 80 + 900 + 1",
                "correct": false
              }
            ],
            "explanation": "Descomponemos según el valor de cada cifra: millares, centenas, decenas y unidades."
          },
          {
            "id": "t1-4-4",
            "question": "¿Cuál es la descomposición correcta de 6.204?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "6-000-200-0-4",
                "text": "6.000 + 200 + 0 + 4",
                "correct": true
              },
              {
                "id": "600-20-0-4",
                "text": "600 + 20 + 0 + 4",
                "correct": false
              },
              {
                "id": "6-000-200-0-4",
                "text": "6.000 + 200 + 0 + 4",
                "correct": false
              },
              {
                "id": "6-000-20-0-4",
                "text": "6.000 + 20 + 0 + 4",
                "correct": false
              }
            ],
            "explanation": "Descomponemos según el valor de cada cifra: millares, centenas, decenas y unidades."
          },
          {
            "id": "t1-4-5",
            "question": "¿Cuál es la descomposición correcta de 7.315?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "7-000-300-10-5",
                "text": "7.000 + 300 + 10 + 5",
                "correct": true
              },
              {
                "id": "700-30-1-5",
                "text": "700 + 30 + 1 + 5",
                "correct": false
              },
              {
                "id": "7-000-300-1-5",
                "text": "7.000 + 300 + 1 + 5",
                "correct": false
              },
              {
                "id": "7-000-30-100-5",
                "text": "7.000 + 30 + 100 + 5",
                "correct": false
              }
            ],
            "explanation": "Descomponemos según el valor de cada cifra: millares, centenas, decenas y unidades."
          },
          {
            "id": "t1-4-6",
            "question": "¿Cuál es la descomposición correcta de 8.049?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "8-000-0-40-9",
                "text": "8.000 + 0 + 40 + 9",
                "correct": true
              },
              {
                "id": "800-0-4-9",
                "text": "800 + 0 + 4 + 9",
                "correct": false
              },
              {
                "id": "8-000-0-4-9",
                "text": "8.000 + 0 + 4 + 9",
                "correct": false
              },
              {
                "id": "8-000-0-400-9",
                "text": "8.000 + 0 + 400 + 9",
                "correct": false
              }
            ],
            "explanation": "Descomponemos según el valor de cada cifra: millares, centenas, decenas y unidades."
          },
          {
            "id": "t1-4-7",
            "question": "¿Cuál es la descomposición correcta de 9.602?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "9-000-600-0-2",
                "text": "9.000 + 600 + 0 + 2",
                "correct": true
              },
              {
                "id": "900-60-0-2",
                "text": "900 + 60 + 0 + 2",
                "correct": false
              },
              {
                "id": "9-000-600-0-2",
                "text": "9.000 + 600 + 0 + 2",
                "correct": false
              },
              {
                "id": "9-000-60-0-2",
                "text": "9.000 + 60 + 0 + 2",
                "correct": false
              }
            ],
            "explanation": "Descomponemos según el valor de cada cifra: millares, centenas, decenas y unidades."
          }
        ]
      },
      {
        "id": "ordinales",
        "title": "Números ordinales",
        "subtitle": "Expresar la posición que ocupa un elemento",
        "kind": "numbers",
        "emoji": "🏁",
        "theory": [
          {
            "type": "text",
            "title": "Los ordinales",
            "text": "Los números ordinales indican orden o posición: primero, segundo, tercero…"
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "10.º = décimo",
              "11.º = undécimo",
              "12.º = duodécimo",
              "20.º = vigésimo"
            ]
          },
          {
            "type": "example",
            "title": "Ejemplo",
            "text": "Si Ana vive en el piso 13.º, vive en el decimotercero."
          },
          {
            "type": "tip",
            "title": "Truco MathCrack",
            "text": "No confundas cardinal con ordinal: 12 indica cantidad; 12.º indica posición."
          }
        ],
        "questions": [
          {
            "id": "t1-o-0",
            "question": "¿Cómo se escribe «decimocuarto»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "14",
                "text": "14.º",
                "correct": true
              },
              {
                "id": "40",
                "text": "40.º",
                "correct": false
              },
              {
                "id": "4",
                "text": "4.º",
                "correct": false
              },
              {
                "id": "14",
                "text": "14",
                "correct": false
              }
            ],
            "explanation": "Decimocuarto indica la posición 14.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t1-o-1",
            "question": "¿Qué ordinal corresponde a 12.º?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "duod-cimo",
                "text": "duodécimo",
                "correct": true
              },
              {
                "id": "vig-simo",
                "text": "vigésimo",
                "correct": false
              },
              {
                "id": "und-cimo",
                "text": "undécimo",
                "correct": false
              },
              {
                "id": "decimosegundo-mil",
                "text": "decimosegundo mil",
                "correct": false
              }
            ],
            "explanation": "12.º se lee duodécimo.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t1-o-2",
            "question": "¿Qué mes ocupa la 4.ª posición del año?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "abril",
                "text": "abril",
                "correct": true
              },
              {
                "id": "marzo",
                "text": "marzo",
                "correct": false
              },
              {
                "id": "mayo",
                "text": "mayo",
                "correct": false
              },
              {
                "id": "junio",
                "text": "junio",
                "correct": false
              }
            ],
            "explanation": "Enero es 1.º, febrero 2.º, marzo 3.º y abril 4.º.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t1-o-3",
            "question": "Si eres el 11.º de una fila, ¿cuántas personas hay delante?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "10",
                "text": "10",
                "correct": true
              },
              {
                "id": "11",
                "text": "11",
                "correct": false
              },
              {
                "id": "12",
                "text": "12",
                "correct": false
              },
              {
                "id": "9",
                "text": "9",
                "correct": false
              }
            ],
            "explanation": "Para ocupar el puesto 11.º debe haber 10 personas antes.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t1-o-4",
            "question": "¿Cuál viene después del vigésimo?",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "vigesimoprimero",
                "text": "vigesimoprimero",
                "correct": true
              },
              {
                "id": "decimonoveno",
                "text": "decimonoveno",
                "correct": false
              },
              {
                "id": "vig-simo-segundo",
                "text": "vigésimo segundo",
                "correct": false
              },
              {
                "id": "trig-simo",
                "text": "trigésimo",
                "correct": false
              }
            ],
            "explanation": "Después del 20.º está el 21.º.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t1-o-5",
            "question": "¿Qué número representa «decimoséptimo»?",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "17",
                "text": "17.º",
                "correct": true
              },
              {
                "id": "7",
                "text": "7.º",
                "correct": false
              },
              {
                "id": "70",
                "text": "70.º",
                "correct": false
              },
              {
                "id": "16",
                "text": "16.º",
                "correct": false
              }
            ],
            "explanation": "Decimoséptimo es 17.º.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t1-o-6",
            "question": "¿Cuál es un número ordinal?",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "8",
                "text": "8.º",
                "correct": true
              },
              {
                "id": "8",
                "text": "8",
                "correct": false
              },
              {
                "id": "800",
                "text": "800",
                "correct": false
              },
              {
                "id": "80",
                "text": "80",
                "correct": false
              }
            ],
            "explanation": "El símbolo º indica posición ordinal.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t1-o-7",
            "question": "Silvia vive dos pisos por encima del 13.º. ¿En qué piso vive?",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "15",
                "text": "15.º",
                "correct": true
              },
              {
                "id": "11",
                "text": "11.º",
                "correct": false
              },
              {
                "id": "14",
                "text": "14.º",
                "correct": false
              },
              {
                "id": "16",
                "text": "16.º",
                "correct": false
              }
            ],
            "explanation": "13 + 2 = 15.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          }
        ]
      },
      {
        "id": "calculo-mental",
        "title": "Cálculo mental",
        "subtitle": "Sumar decenas con rapidez",
        "kind": "mental",
        "emoji": "⚡",
        "theory": [
          {
            "type": "text",
            "title": "Sumar decenas",
            "text": "Para sumar decenas mentalmente, suma primero las decenas y conserva las unidades."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "86 + 30 = 116",
              "37 + 60 = 97",
              "Puedes descomponer 30 como 3 decenas",
              "Comprueba si el resultado tiene sentido."
            ]
          },
          {
            "type": "example",
            "title": "Ejemplo",
            "text": "54 + 70 = 124."
          },
          {
            "type": "tip",
            "title": "Truco MathCrack",
            "text": "Suma 7 decenas a 54: 54 → 124."
          }
        ],
        "questions": [
          {
            "id": "t1-m-0",
            "question": "Calcula mentalmente: 86 + 30",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "116",
                "text": "116",
                "correct": true
              },
              {
                "id": "126",
                "text": "126",
                "correct": false
              },
              {
                "id": "106",
                "text": "106",
                "correct": false
              },
              {
                "id": "117",
                "text": "117",
                "correct": false
              }
            ],
            "explanation": "Suma primero las decenas y conserva las unidades."
          },
          {
            "id": "t1-m-1",
            "question": "Calcula mentalmente: 59 + 30",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "89",
                "text": "89",
                "correct": true
              },
              {
                "id": "99",
                "text": "99",
                "correct": false
              },
              {
                "id": "79",
                "text": "79",
                "correct": false
              },
              {
                "id": "90",
                "text": "90",
                "correct": false
              }
            ],
            "explanation": "Suma primero las decenas y conserva las unidades."
          },
          {
            "id": "t1-m-2",
            "question": "Calcula mentalmente: 37 + 60",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "97",
                "text": "97",
                "correct": true
              },
              {
                "id": "107",
                "text": "107",
                "correct": false
              },
              {
                "id": "87",
                "text": "87",
                "correct": false
              },
              {
                "id": "98",
                "text": "98",
                "correct": false
              }
            ],
            "explanation": "Suma primero las decenas y conserva las unidades."
          },
          {
            "id": "t1-m-3",
            "question": "Calcula mentalmente: 46 + 60",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "106",
                "text": "106",
                "correct": true
              },
              {
                "id": "116",
                "text": "116",
                "correct": false
              },
              {
                "id": "96",
                "text": "96",
                "correct": false
              },
              {
                "id": "107",
                "text": "107",
                "correct": false
              }
            ],
            "explanation": "Suma primero las decenas y conserva las unidades."
          },
          {
            "id": "t1-m-4",
            "question": "Calcula mentalmente: 73 + 50",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "123",
                "text": "123",
                "correct": true
              },
              {
                "id": "133",
                "text": "133",
                "correct": false
              },
              {
                "id": "113",
                "text": "113",
                "correct": false
              },
              {
                "id": "124",
                "text": "124",
                "correct": false
              }
            ],
            "explanation": "Suma primero las decenas y conserva las unidades."
          },
          {
            "id": "t1-m-5",
            "question": "Calcula mentalmente: 28 + 50",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "78",
                "text": "78",
                "correct": true
              },
              {
                "id": "88",
                "text": "88",
                "correct": false
              },
              {
                "id": "68",
                "text": "68",
                "correct": false
              },
              {
                "id": "79",
                "text": "79",
                "correct": false
              }
            ],
            "explanation": "Suma primero las decenas y conserva las unidades."
          },
          {
            "id": "t1-m-6",
            "question": "Calcula mentalmente: 42 + 40",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "82",
                "text": "82",
                "correct": true
              },
              {
                "id": "92",
                "text": "92",
                "correct": false
              },
              {
                "id": "72",
                "text": "72",
                "correct": false
              },
              {
                "id": "83",
                "text": "83",
                "correct": false
              }
            ],
            "explanation": "Suma primero las decenas y conserva las unidades."
          },
          {
            "id": "t1-m-7",
            "question": "Calcula mentalmente: 54 + 70",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "124",
                "text": "124",
                "correct": true
              },
              {
                "id": "134",
                "text": "134",
                "correct": false
              },
              {
                "id": "114",
                "text": "114",
                "correct": false
              },
              {
                "id": "125",
                "text": "125",
                "correct": false
              }
            ],
            "explanation": "Suma primero las decenas y conserva las unidades."
          },
          {
            "id": "t1-m-8",
            "question": "Calcula mentalmente: 87 + 80",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "167",
                "text": "167",
                "correct": true
              },
              {
                "id": "177",
                "text": "177",
                "correct": false
              },
              {
                "id": "157",
                "text": "157",
                "correct": false
              },
              {
                "id": "168",
                "text": "168",
                "correct": false
              }
            ],
            "explanation": "Suma primero las decenas y conserva las unidades."
          },
          {
            "id": "t1-m-9",
            "question": "Calcula mentalmente: 125 + 40",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "165",
                "text": "165",
                "correct": true
              },
              {
                "id": "175",
                "text": "175",
                "correct": false
              },
              {
                "id": "155",
                "text": "155",
                "correct": false
              },
              {
                "id": "166",
                "text": "166",
                "correct": false
              }
            ],
            "explanation": "Suma primero las decenas y conserva las unidades."
          }
        ]
      },
      {
        "id": "problemas",
        "title": "Laboratorio de problemas",
        "subtitle": "Identificar qué situaciones se pueden resolver con una operación",
        "kind": "problems",
        "emoji": "🧠",
        "theory": [
          {
            "type": "text",
            "title": "Entender un problema",
            "text": "Antes de operar hay que saber qué pregunta el problema y si tenemos los datos necesarios."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "Lee la situación completa.",
              "Localiza los datos útiles.",
              "Decide qué hay que averiguar.",
              "Elige la operación y comprueba la respuesta."
            ]
          },
          {
            "type": "example",
            "title": "Ejemplo",
            "text": "En una clase hay 12 chicas y 9 chicos. Para saber cuántos alumnos hay, hacemos 12 + 9."
          },
          {
            "type": "tip",
            "title": "Truco MathCrack",
            "text": "No hagas una operación solo porque aparecen números: primero comprende la pregunta."
          }
        ],
        "questions": [
          {
            "id": "t1-p-0",
            "question": "En una clase hay 12 niñas y 9 niños. ¿Cuántos alumnos hay?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "21",
                "text": "21",
                "correct": true
              },
              {
                "id": "3",
                "text": "3",
                "correct": false
              },
              {
                "id": "108",
                "text": "108",
                "correct": false
              },
              {
                "id": "20",
                "text": "20",
                "correct": false
              }
            ],
            "explanation": "12 + 9 = 21.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t1-p-1",
            "question": "Un balón cuesta 28 € y tienes 16 €. ¿Cuánto te falta?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "12",
                "text": "12 €",
                "correct": true
              },
              {
                "id": "44",
                "text": "44 €",
                "correct": false
              },
              {
                "id": "14",
                "text": "14 €",
                "correct": false
              },
              {
                "id": "10",
                "text": "10 €",
                "correct": false
              }
            ],
            "explanation": "28 − 16 = 12.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t1-p-2",
            "question": "El año pasado había 186 alumnos y este año hay 24 más. ¿Cuántos hay ahora?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "210",
                "text": "210",
                "correct": true
              },
              {
                "id": "162",
                "text": "162",
                "correct": false
              },
              {
                "id": "200",
                "text": "200",
                "correct": false
              },
              {
                "id": "212",
                "text": "212",
                "correct": false
              }
            ],
            "explanation": "186 + 24 = 210.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t1-p-3",
            "question": "Hay 86 alumnos en 3.º y 62 en 4.º. ¿Cuántos hay entre los dos cursos?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "148",
                "text": "148",
                "correct": true
              },
              {
                "id": "24",
                "text": "24",
                "correct": false
              },
              {
                "id": "138",
                "text": "138",
                "correct": false
              },
              {
                "id": "152",
                "text": "152",
                "correct": false
              }
            ],
            "explanation": "86 + 62 = 148.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t1-p-4",
            "question": "Una raqueta vale 46 € en internet y 38 € en tienda. ¿Cuánto ahorras en tienda?",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "8",
                "text": "8 €",
                "correct": true
              },
              {
                "id": "84",
                "text": "84 €",
                "correct": false
              },
              {
                "id": "6",
                "text": "6 €",
                "correct": false
              },
              {
                "id": "10",
                "text": "10 €",
                "correct": false
              }
            ],
            "explanation": "46 − 38 = 8.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t1-p-5",
            "question": "Tengo 5 € y gasto 3 €. ¿Cuánto me sobra?",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "2",
                "text": "2 €",
                "correct": true
              },
              {
                "id": "8",
                "text": "8 €",
                "correct": false
              },
              {
                "id": "3",
                "text": "3 €",
                "correct": false
              },
              {
                "id": "1",
                "text": "1 €",
                "correct": false
              }
            ],
            "explanation": "5 − 3 = 2.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t1-p-6",
            "question": "Han faltado 3 alumnos de 3.º y 6 de 4.º. ¿Cuántos faltan entre ambos cursos?",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "9",
                "text": "9",
                "correct": true
              },
              {
                "id": "3",
                "text": "3",
                "correct": false
              },
              {
                "id": "18",
                "text": "18",
                "correct": false
              },
              {
                "id": "10",
                "text": "10",
                "correct": false
              }
            ],
            "explanation": "3 + 6 = 9.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t1-p-7",
            "question": "Una pregunta no aporta los datos necesarios. ¿Qué debemos hacer?",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "reconocer-que-no-puede-resolve",
                "text": "Reconocer que no puede resolverse todavía",
                "correct": true
              },
              {
                "id": "inventar-un-dato",
                "text": "Inventar un dato",
                "correct": false
              },
              {
                "id": "sumar-todos-los-n-meros",
                "text": "Sumar todos los números",
                "correct": false
              },
              {
                "id": "elegir-cualquier-resultado",
                "text": "Elegir cualquier resultado",
                "correct": false
              }
            ],
            "explanation": "Un problema solo puede resolverse si conocemos los datos necesarios.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          }
        ]
      },
      {
        "id": "comprueba",
        "title": "Comprueba tu progreso",
        "subtitle": "Ejercicios mezclados de los contenidos trabajados en el tema",
        "kind": "review",
        "emoji": "🏆",
        "theory": [
          {
            "type": "text",
            "title": "Repaso final",
            "text": "Aquí no hay teoría nueva. Resuelve ejercicios de los apartados que has trabajado en este tema."
          },
          {
            "type": "important",
            "title": "Objetivo",
            "text": "Comprobar que sabes aplicar los conocimientos, no memorizar nombres de secciones."
          },
          {
            "type": "tip",
            "title": "Si fallas",
            "text": "Lee la explicación, vuelve al apartado correspondiente y practica de nuevo."
          }
        ],
        "questions": [
          {
            "id": "tema-01-review-tres-cifras-0",
            "question": "¿Cuál es la descomposición correcta de 542?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "500-40-2",
                "text": "500 + 40 + 2",
                "correct": true
              },
              {
                "id": "50-4-2",
                "text": "50 + 4 + 2",
                "correct": false
              },
              {
                "id": "500-4-2",
                "text": "500 + 4 + 2",
                "correct": false
              },
              {
                "id": "50-400-2",
                "text": "50 + 400 + 2",
                "correct": false
              }
            ],
            "explanation": "Descomponemos según el valor de cada cifra: millares, centenas, decenas y unidades."
          },
          {
            "id": "tema-01-review-tres-cifras-1",
            "question": "¿Cuál es la descomposición correcta de 356?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "300-50-6",
                "text": "300 + 50 + 6",
                "correct": true
              },
              {
                "id": "30-5-6",
                "text": "30 + 5 + 6",
                "correct": false
              },
              {
                "id": "300-5-6",
                "text": "300 + 5 + 6",
                "correct": false
              },
              {
                "id": "30-500-6",
                "text": "30 + 500 + 6",
                "correct": false
              }
            ],
            "explanation": "Descomponemos según el valor de cada cifra: millares, centenas, decenas y unidades."
          },
          {
            "id": "tema-01-review-cuatro-cifras-0",
            "question": "¿Cuál es la descomposición correcta de 1.342?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "1-000-300-40-2",
                "text": "1.000 + 300 + 40 + 2",
                "correct": true
              },
              {
                "id": "100-30-4-2",
                "text": "100 + 30 + 4 + 2",
                "correct": false
              },
              {
                "id": "1-000-300-4-2",
                "text": "1.000 + 300 + 4 + 2",
                "correct": false
              },
              {
                "id": "1-000-30-400-2",
                "text": "1.000 + 30 + 400 + 2",
                "correct": false
              }
            ],
            "explanation": "Descomponemos según el valor de cada cifra: millares, centenas, decenas y unidades."
          },
          {
            "id": "tema-01-review-cuatro-cifras-1",
            "question": "¿Cuál es la descomposición correcta de 2.056?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "2-000-0-50-6",
                "text": "2.000 + 0 + 50 + 6",
                "correct": true
              },
              {
                "id": "200-0-5-6",
                "text": "200 + 0 + 5 + 6",
                "correct": false
              },
              {
                "id": "2-000-0-5-6",
                "text": "2.000 + 0 + 5 + 6",
                "correct": false
              },
              {
                "id": "2-000-0-500-6",
                "text": "2.000 + 0 + 500 + 6",
                "correct": false
              }
            ],
            "explanation": "Descomponemos según el valor de cada cifra: millares, centenas, decenas y unidades."
          },
          {
            "id": "tema-01-review-ordinales-0",
            "question": "¿Cómo se escribe «decimocuarto»?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "14",
                "text": "14.º",
                "correct": true
              },
              {
                "id": "40",
                "text": "40.º",
                "correct": false
              },
              {
                "id": "4",
                "text": "4.º",
                "correct": false
              },
              {
                "id": "14",
                "text": "14",
                "correct": false
              }
            ],
            "explanation": "Decimocuarto indica la posición 14.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "tema-01-review-ordinales-1",
            "question": "¿Qué ordinal corresponde a 12.º?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "duod-cimo",
                "text": "duodécimo",
                "correct": true
              },
              {
                "id": "vig-simo",
                "text": "vigésimo",
                "correct": false
              },
              {
                "id": "und-cimo",
                "text": "undécimo",
                "correct": false
              },
              {
                "id": "decimosegundo-mil",
                "text": "decimosegundo mil",
                "correct": false
              }
            ],
            "explanation": "12.º se lee duodécimo.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "tema-01-review-calculo-mental-0",
            "question": "Calcula mentalmente: 86 + 30",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "116",
                "text": "116",
                "correct": true
              },
              {
                "id": "126",
                "text": "126",
                "correct": false
              },
              {
                "id": "106",
                "text": "106",
                "correct": false
              },
              {
                "id": "117",
                "text": "117",
                "correct": false
              }
            ],
            "explanation": "Suma primero las decenas y conserva las unidades."
          },
          {
            "id": "tema-01-review-calculo-mental-1",
            "question": "Calcula mentalmente: 59 + 30",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "89",
                "text": "89",
                "correct": true
              },
              {
                "id": "99",
                "text": "99",
                "correct": false
              },
              {
                "id": "79",
                "text": "79",
                "correct": false
              },
              {
                "id": "90",
                "text": "90",
                "correct": false
              }
            ],
            "explanation": "Suma primero las decenas y conserva las unidades."
          },
          {
            "id": "tema-01-review-problemas-0",
            "question": "En una clase hay 12 niñas y 9 niños. ¿Cuántos alumnos hay?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "21",
                "text": "21",
                "correct": true
              },
              {
                "id": "3",
                "text": "3",
                "correct": false
              },
              {
                "id": "108",
                "text": "108",
                "correct": false
              },
              {
                "id": "20",
                "text": "20",
                "correct": false
              }
            ],
            "explanation": "12 + 9 = 21.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "tema-01-review-problemas-1",
            "question": "Un balón cuesta 28 € y tienes 16 €. ¿Cuánto te falta?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "12",
                "text": "12 €",
                "correct": true
              },
              {
                "id": "44",
                "text": "44 €",
                "correct": false
              },
              {
                "id": "14",
                "text": "14 €",
                "correct": false
              },
              {
                "id": "10",
                "text": "10 €",
                "correct": false
              }
            ],
            "explanation": "28 − 16 = 12.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          }
        ]
      }
    ]
  },
  {
    "id": "tema-02",
    "order": 2,
    "title": "Sumas y restas",
    "description": "Aprende la teoría, practica con muchos ejercicios y comprueba tu progreso.",
    "emoji": "➕",
    "sections": [
      {
        "id": "sumas",
        "title": "Sumas",
        "subtitle": "Sumar números de varias cifras con y sin llevadas",
        "kind": "calculation",
        "emoji": "➕",
        "theory": [
          {
            "type": "text",
            "title": "La suma",
            "text": "Para sumar, coloca unidades debajo de unidades, decenas debajo de decenas y centenas debajo de centenas. Suma de derecha a izquierda."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "Alinea las cifras por su posición.",
              "Empieza por las unidades.",
              "Si una columna llega a 10, llevamos una unidad al orden siguiente.",
              "Comprueba con una estimación."
            ]
          },
          {
            "type": "example",
            "title": "Ejemplo",
            "text": "458 + 236 = 694."
          },
          {
            "type": "tip",
            "title": "Truco MathCrack",
            "text": "Orden y colocación correcta evitan la mayoría de errores."
          }
        ],
        "questions": [
          {
            "id": "t2-s-0",
            "question": "Calcula: 326 + 147",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "473",
                "text": "473",
                "correct": true
              },
              {
                "id": "483",
                "text": "483",
                "correct": false
              },
              {
                "id": "463",
                "text": "463",
                "correct": false
              },
              {
                "id": "474",
                "text": "474",
                "correct": false
              }
            ],
            "explanation": "El resultado correcto es 473. Haz la operación con orden y comprueba el resultado.",
            "hint": "Puedes hacerlo paso a paso."
          },
          {
            "id": "t2-s-1",
            "question": "Calcula: 458 + 236",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "694",
                "text": "694",
                "correct": true
              },
              {
                "id": "704",
                "text": "704",
                "correct": false
              },
              {
                "id": "684",
                "text": "684",
                "correct": false
              },
              {
                "id": "695",
                "text": "695",
                "correct": false
              }
            ],
            "explanation": "El resultado correcto es 694. Haz la operación con orden y comprueba el resultado.",
            "hint": "Puedes hacerlo paso a paso."
          },
          {
            "id": "t2-s-2",
            "question": "Calcula: 129 + 384",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "513",
                "text": "513",
                "correct": true
              },
              {
                "id": "523",
                "text": "523",
                "correct": false
              },
              {
                "id": "503",
                "text": "503",
                "correct": false
              },
              {
                "id": "514",
                "text": "514",
                "correct": false
              }
            ],
            "explanation": "El resultado correcto es 513. Haz la operación con orden y comprueba el resultado.",
            "hint": "Puedes hacerlo paso a paso."
          },
          {
            "id": "t2-s-3",
            "question": "Calcula: 572 + 219",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "791",
                "text": "791",
                "correct": true
              },
              {
                "id": "801",
                "text": "801",
                "correct": false
              },
              {
                "id": "781",
                "text": "781",
                "correct": false
              },
              {
                "id": "792",
                "text": "792",
                "correct": false
              }
            ],
            "explanation": "El resultado correcto es 791. Haz la operación con orden y comprueba el resultado.",
            "hint": "Puedes hacerlo paso a paso."
          },
          {
            "id": "t2-s-4",
            "question": "Calcula: 645 + 178",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "823",
                "text": "823",
                "correct": true
              },
              {
                "id": "833",
                "text": "833",
                "correct": false
              },
              {
                "id": "813",
                "text": "813",
                "correct": false
              },
              {
                "id": "824",
                "text": "824",
                "correct": false
              }
            ],
            "explanation": "El resultado correcto es 823. Haz la operación con orden y comprueba el resultado.",
            "hint": "Puedes hacerlo paso a paso."
          },
          {
            "id": "t2-s-5",
            "question": "Calcula: 807 + 96",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "903",
                "text": "903",
                "correct": true
              },
              {
                "id": "913",
                "text": "913",
                "correct": false
              },
              {
                "id": "893",
                "text": "893",
                "correct": false
              },
              {
                "id": "904",
                "text": "904",
                "correct": false
              }
            ],
            "explanation": "El resultado correcto es 903. Haz la operación con orden y comprueba el resultado.",
            "hint": "Puedes hacerlo paso a paso."
          },
          {
            "id": "t2-s-6",
            "question": "Calcula: 268 + 457",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "725",
                "text": "725",
                "correct": true
              },
              {
                "id": "735",
                "text": "735",
                "correct": false
              },
              {
                "id": "715",
                "text": "715",
                "correct": false
              },
              {
                "id": "726",
                "text": "726",
                "correct": false
              }
            ],
            "explanation": "El resultado correcto es 725. Haz la operación con orden y comprueba el resultado.",
            "hint": "Puedes hacerlo paso a paso."
          },
          {
            "id": "t2-s-7",
            "question": "Calcula: 539 + 284",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "823",
                "text": "823",
                "correct": true
              },
              {
                "id": "833",
                "text": "833",
                "correct": false
              },
              {
                "id": "813",
                "text": "813",
                "correct": false
              },
              {
                "id": "824",
                "text": "824",
                "correct": false
              }
            ],
            "explanation": "El resultado correcto es 823. Haz la operación con orden y comprueba el resultado.",
            "hint": "Puedes hacerlo paso a paso."
          },
          {
            "id": "t2-s-8",
            "question": "Calcula: 675 + 248",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "923",
                "text": "923",
                "correct": true
              },
              {
                "id": "933",
                "text": "933",
                "correct": false
              },
              {
                "id": "913",
                "text": "913",
                "correct": false
              },
              {
                "id": "924",
                "text": "924",
                "correct": false
              }
            ],
            "explanation": "El resultado correcto es 923. Haz la operación con orden y comprueba el resultado.",
            "hint": "Puedes hacerlo paso a paso."
          },
          {
            "id": "t2-s-9",
            "question": "Calcula: 396 + 507",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "903",
                "text": "903",
                "correct": true
              },
              {
                "id": "913",
                "text": "913",
                "correct": false
              },
              {
                "id": "893",
                "text": "893",
                "correct": false
              },
              {
                "id": "904",
                "text": "904",
                "correct": false
              }
            ],
            "explanation": "El resultado correcto es 903. Haz la operación con orden y comprueba el resultado.",
            "hint": "Puedes hacerlo paso a paso."
          }
        ]
      },
      {
        "id": "estimacion-sumas",
        "title": "Estimaciones de sumas",
        "subtitle": "Aproximar sumandos para calcular un resultado cercano",
        "kind": "calculation",
        "emoji": "🎯",
        "theory": [
          {
            "type": "text",
            "title": "Estimar una suma",
            "text": "Estimar es obtener un resultado aproximado. Primero aproximamos los sumandos al orden indicado y después sumamos."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "47 ≈ 50",
              "132 ≈ 100 si aproximamos a centenas",
              "Una estimación no es el resultado exacto",
              "Sirve para comprobar si un resultado es razonable."
            ]
          },
          {
            "type": "example",
            "title": "Ejemplo",
            "text": "198 + 304 ≈ 200 + 300 = 500."
          },
          {
            "type": "tip",
            "title": "Truco MathCrack",
            "text": "Redondea primero y opera después."
          }
        ],
        "questions": [
          {
            "id": "t2-es-0",
            "question": "47 + 32, aproximando a decenas, es aproximadamente…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "80",
                "text": "80",
                "correct": true
              },
              {
                "id": "70",
                "text": "70",
                "correct": false
              },
              {
                "id": "90",
                "text": "90",
                "correct": false
              },
              {
                "id": "79",
                "text": "79",
                "correct": false
              }
            ],
            "explanation": "47 ≈ 50 y 32 ≈ 30; 50 + 30 = 80.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t2-es-1",
            "question": "198 + 304, aproximando a centenas, es…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "500",
                "text": "500",
                "correct": true
              },
              {
                "id": "400",
                "text": "400",
                "correct": false
              },
              {
                "id": "600",
                "text": "600",
                "correct": false
              },
              {
                "id": "502",
                "text": "502",
                "correct": false
              }
            ],
            "explanation": "198 ≈ 200 y 304 ≈ 300.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t2-es-2",
            "question": "¿Cuál es la mejor aproximación de 68 a decenas?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "70",
                "text": "70",
                "correct": true
              },
              {
                "id": "60",
                "text": "60",
                "correct": false
              },
              {
                "id": "80",
                "text": "80",
                "correct": false
              },
              {
                "id": "68",
                "text": "68",
                "correct": false
              }
            ],
            "explanation": "La cifra de unidades es 8, así que subimos a 70.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t2-es-3",
            "question": "¿Cuál es la mejor aproximación de 143 a centenas?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "100",
                "text": "100",
                "correct": true
              },
              {
                "id": "200",
                "text": "200",
                "correct": false
              },
              {
                "id": "140",
                "text": "140",
                "correct": false
              },
              {
                "id": "143",
                "text": "143",
                "correct": false
              }
            ],
            "explanation": "43 es menor que 50; se aproxima a 100.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t2-es-4",
            "question": "254 + 148 ≈ ? a centenas",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "400",
                "text": "400",
                "correct": true
              },
              {
                "id": "300",
                "text": "300",
                "correct": false
              },
              {
                "id": "500",
                "text": "500",
                "correct": false
              },
              {
                "id": "402",
                "text": "402",
                "correct": false
              }
            ],
            "explanation": "254 ≈ 300 y 148 ≈ 100.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t2-es-5",
            "question": "91 + 208 ≈ ? a centenas",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "300",
                "text": "300",
                "correct": true
              },
              {
                "id": "200",
                "text": "200",
                "correct": false
              },
              {
                "id": "400",
                "text": "400",
                "correct": false
              },
              {
                "id": "299",
                "text": "299",
                "correct": false
              }
            ],
            "explanation": "91 ≈ 100 y 208 ≈ 200.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t2-es-6",
            "question": "¿Para qué sirve estimar?",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "para-obtener-un-resultado-cerc",
                "text": "Para obtener un resultado cercano y comprobar cálculos",
                "correct": true
              },
              {
                "id": "para-sustituir-siempre-el-c-lc",
                "text": "Para sustituir siempre el cálculo exacto",
                "correct": false
              },
              {
                "id": "para-cambiar-los-datos",
                "text": "Para cambiar los datos",
                "correct": false
              },
              {
                "id": "para-evitar-pensar",
                "text": "Para evitar pensar",
                "correct": false
              }
            ],
            "explanation": "La estimación ayuda a anticipar y revisar resultados.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t2-es-7",
            "question": "499 + 502 ≈ ? a centenas",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "1-000",
                "text": "1.000",
                "correct": true
              },
              {
                "id": "900",
                "text": "900",
                "correct": false
              },
              {
                "id": "1-100",
                "text": "1.100",
                "correct": false
              },
              {
                "id": "1-001",
                "text": "1.001",
                "correct": false
              }
            ],
            "explanation": "499 ≈ 500 y 502 ≈ 500.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          }
        ]
      },
      {
        "id": "restas",
        "title": "Restas",
        "subtitle": "Restar números de varias cifras con y sin llevadas",
        "kind": "calculation",
        "emoji": "➖",
        "theory": [
          {
            "type": "text",
            "title": "La resta",
            "text": "En una resta también colocamos las cifras por órdenes y empezamos por las unidades. Si no podemos restar, transformamos una unidad del orden superior."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "Unidades bajo unidades.",
              "Empieza por la derecha.",
              "Usa llevadas cuando sea necesario.",
              "Comprueba: diferencia + sustraendo = minuendo."
            ]
          },
          {
            "type": "example",
            "title": "Ejemplo",
            "text": "684 − 251 = 433."
          },
          {
            "type": "tip",
            "title": "Truco MathCrack",
            "text": "Después de restar, usa la suma para comprobar."
          }
        ],
        "questions": [
          {
            "id": "t2-r-0",
            "question": "Calcula: 684 − 251",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "433",
                "text": "433",
                "correct": true
              },
              {
                "id": "443",
                "text": "443",
                "correct": false
              },
              {
                "id": "423",
                "text": "423",
                "correct": false
              },
              {
                "id": "434",
                "text": "434",
                "correct": false
              }
            ],
            "explanation": "El resultado correcto es 433. Haz la operación con orden y comprueba el resultado.",
            "hint": "Puedes hacerlo paso a paso."
          },
          {
            "id": "t2-r-1",
            "question": "Calcula: 903 − 478",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "425",
                "text": "425",
                "correct": true
              },
              {
                "id": "435",
                "text": "435",
                "correct": false
              },
              {
                "id": "415",
                "text": "415",
                "correct": false
              },
              {
                "id": "426",
                "text": "426",
                "correct": false
              }
            ],
            "explanation": "El resultado correcto es 425. Haz la operación con orden y comprueba el resultado.",
            "hint": "Puedes hacerlo paso a paso."
          },
          {
            "id": "t2-r-2",
            "question": "Calcula: 750 − 326",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "424",
                "text": "424",
                "correct": true
              },
              {
                "id": "434",
                "text": "434",
                "correct": false
              },
              {
                "id": "414",
                "text": "414",
                "correct": false
              },
              {
                "id": "425",
                "text": "425",
                "correct": false
              }
            ],
            "explanation": "El resultado correcto es 424. Haz la operación con orden y comprueba el resultado.",
            "hint": "Puedes hacerlo paso a paso."
          },
          {
            "id": "t2-r-3",
            "question": "Calcula: 621 − 198",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "423",
                "text": "423",
                "correct": true
              },
              {
                "id": "433",
                "text": "433",
                "correct": false
              },
              {
                "id": "413",
                "text": "413",
                "correct": false
              },
              {
                "id": "424",
                "text": "424",
                "correct": false
              }
            ],
            "explanation": "El resultado correcto es 423. Haz la operación con orden y comprueba el resultado.",
            "hint": "Puedes hacerlo paso a paso."
          },
          {
            "id": "t2-r-4",
            "question": "Calcula: 845 − 279",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "566",
                "text": "566",
                "correct": true
              },
              {
                "id": "576",
                "text": "576",
                "correct": false
              },
              {
                "id": "556",
                "text": "556",
                "correct": false
              },
              {
                "id": "567",
                "text": "567",
                "correct": false
              }
            ],
            "explanation": "El resultado correcto es 566. Haz la operación con orden y comprueba el resultado.",
            "hint": "Puedes hacerlo paso a paso."
          },
          {
            "id": "t2-r-5",
            "question": "Calcula: 700 − 365",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "335",
                "text": "335",
                "correct": true
              },
              {
                "id": "345",
                "text": "345",
                "correct": false
              },
              {
                "id": "325",
                "text": "325",
                "correct": false
              },
              {
                "id": "336",
                "text": "336",
                "correct": false
              }
            ],
            "explanation": "El resultado correcto es 335. Haz la operación con orden y comprueba el resultado.",
            "hint": "Puedes hacerlo paso a paso."
          },
          {
            "id": "t2-r-6",
            "question": "Calcula: 932 − 487",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "445",
                "text": "445",
                "correct": true
              },
              {
                "id": "455",
                "text": "455",
                "correct": false
              },
              {
                "id": "435",
                "text": "435",
                "correct": false
              },
              {
                "id": "446",
                "text": "446",
                "correct": false
              }
            ],
            "explanation": "El resultado correcto es 445. Haz la operación con orden y comprueba el resultado.",
            "hint": "Puedes hacerlo paso a paso."
          },
          {
            "id": "t2-r-7",
            "question": "Calcula: 560 − 174",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "386",
                "text": "386",
                "correct": true
              },
              {
                "id": "396",
                "text": "396",
                "correct": false
              },
              {
                "id": "376",
                "text": "376",
                "correct": false
              },
              {
                "id": "387",
                "text": "387",
                "correct": false
              }
            ],
            "explanation": "El resultado correcto es 386. Haz la operación con orden y comprueba el resultado.",
            "hint": "Puedes hacerlo paso a paso."
          },
          {
            "id": "t2-r-8",
            "question": "Calcula: 808 − 359",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "449",
                "text": "449",
                "correct": true
              },
              {
                "id": "459",
                "text": "459",
                "correct": false
              },
              {
                "id": "439",
                "text": "439",
                "correct": false
              },
              {
                "id": "450",
                "text": "450",
                "correct": false
              }
            ],
            "explanation": "El resultado correcto es 449. Haz la operación con orden y comprueba el resultado.",
            "hint": "Puedes hacerlo paso a paso."
          },
          {
            "id": "t2-r-9",
            "question": "Calcula: 999 − 468",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "531",
                "text": "531",
                "correct": true
              },
              {
                "id": "541",
                "text": "541",
                "correct": false
              },
              {
                "id": "521",
                "text": "521",
                "correct": false
              },
              {
                "id": "532",
                "text": "532",
                "correct": false
              }
            ],
            "explanation": "El resultado correcto es 531. Haz la operación con orden y comprueba el resultado.",
            "hint": "Puedes hacerlo paso a paso."
          }
        ]
      },
      {
        "id": "aproximaciones",
        "title": "Aproximaciones",
        "subtitle": "Aproximar números a decenas, centenas y millares",
        "kind": "numbers",
        "emoji": "≈",
        "theory": [
          {
            "type": "text",
            "title": "Aproximar",
            "text": "Mira la cifra situada a la derecha del orden al que quieres aproximar. Si es 5 o mayor, aumenta una unidad; si es menor que 5, se mantiene."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "67 ≈ 70 a decenas",
              "243 ≈ 200 a centenas",
              "768 ≈ 800 a centenas",
              "1.620 ≈ 2.000 a millares"
            ]
          },
          {
            "type": "example",
            "title": "Ejemplo",
            "text": "346 aproximado a centenas es 300."
          },
          {
            "type": "tip",
            "title": "Truco MathCrack",
            "text": "Subraya el orden pedido y mira solo la cifra de su derecha."
          }
        ],
        "questions": [
          {
            "id": "t2-a-0",
            "question": "67 aproximado a decenas es…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "70",
                "text": "70",
                "correct": true
              },
              {
                "id": "60",
                "text": "60",
                "correct": false
              },
              {
                "id": "67",
                "text": "67",
                "correct": false
              },
              {
                "id": "80",
                "text": "80",
                "correct": false
              }
            ],
            "explanation": "La unidad es 7, así que aproximamos hacia arriba.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t2-a-1",
            "question": "243 aproximado a centenas es…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "200",
                "text": "200",
                "correct": true
              },
              {
                "id": "300",
                "text": "300",
                "correct": false
              },
              {
                "id": "240",
                "text": "240",
                "correct": false
              },
              {
                "id": "243",
                "text": "243",
                "correct": false
              }
            ],
            "explanation": "La decena es 4, menor que 5.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t2-a-2",
            "question": "768 aproximado a centenas es…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "800",
                "text": "800",
                "correct": true
              },
              {
                "id": "700",
                "text": "700",
                "correct": false
              },
              {
                "id": "760",
                "text": "760",
                "correct": false
              },
              {
                "id": "768",
                "text": "768",
                "correct": false
              }
            ],
            "explanation": "La decena es 6, así que subimos.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t2-a-3",
            "question": "1.620 aproximado a millares es…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "2-000",
                "text": "2.000",
                "correct": true
              },
              {
                "id": "1-000",
                "text": "1.000",
                "correct": false
              },
              {
                "id": "1-600",
                "text": "1.600",
                "correct": false
              },
              {
                "id": "1-620",
                "text": "1.620",
                "correct": false
              }
            ],
            "explanation": "La centena es 6, así que subimos al siguiente millar.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t2-a-4",
            "question": "4.320 aproximado a millares es…",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "4-000",
                "text": "4.000",
                "correct": true
              },
              {
                "id": "5-000",
                "text": "5.000",
                "correct": false
              },
              {
                "id": "4-300",
                "text": "4.300",
                "correct": false
              },
              {
                "id": "3-000",
                "text": "3.000",
                "correct": false
              }
            ],
            "explanation": "La centena es 3.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t2-a-5",
            "question": "895 aproximado a decenas es…",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "900",
                "text": "900",
                "correct": true
              },
              {
                "id": "890",
                "text": "890",
                "correct": false
              },
              {
                "id": "800",
                "text": "800",
                "correct": false
              },
              {
                "id": "895",
                "text": "895",
                "correct": false
              }
            ],
            "explanation": "La unidad es 5, se aproxima hacia arriba.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t2-a-6",
            "question": "1.249 aproximado a centenas es…",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "1-200",
                "text": "1.200",
                "correct": true
              },
              {
                "id": "1-300",
                "text": "1.300",
                "correct": false
              },
              {
                "id": "1-250",
                "text": "1.250",
                "correct": false
              },
              {
                "id": "1-000",
                "text": "1.000",
                "correct": false
              }
            ],
            "explanation": "La decena es 4.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t2-a-7",
            "question": "3.551 aproximado a centenas es…",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "3-600",
                "text": "3.600",
                "correct": true
              },
              {
                "id": "3-500",
                "text": "3.500",
                "correct": false
              },
              {
                "id": "3-550",
                "text": "3.550",
                "correct": false
              },
              {
                "id": "4-000",
                "text": "4.000",
                "correct": false
              }
            ],
            "explanation": "La decena es 5.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          }
        ]
      },
      {
        "id": "problemas-dos-operaciones",
        "title": "Problemas de dos operaciones",
        "subtitle": "Resolver situaciones que necesitan dos pasos",
        "kind": "problems",
        "emoji": "🧠",
        "theory": [
          {
            "type": "text",
            "title": "Problemas de dos operaciones",
            "text": "Algunos problemas no se resuelven de una sola vez. El resultado de la primera operación se usa para realizar la segunda."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "Averigua qué necesitas calcular primero.",
              "Haz la primera operación.",
              "Usa ese resultado en la segunda.",
              "Escribe una respuesta completa."
            ]
          },
          {
            "type": "example",
            "title": "Ejemplo",
            "text": "Hay 125 libros, llegan 48 y se prestan 36: 125 + 48 = 173; 173 − 36 = 137."
          },
          {
            "type": "tip",
            "title": "Truco MathCrack",
            "text": "Escribe los dos pasos antes de empezar a calcular."
          }
        ],
        "questions": [
          {
            "id": "t2-p-0",
            "question": "Hay 125 libros, llegan 48 y se prestan 36. ¿Cuántos quedan?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "137",
                "text": "137",
                "correct": true
              },
              {
                "id": "89",
                "text": "89",
                "correct": false
              },
              {
                "id": "173",
                "text": "173",
                "correct": false
              },
              {
                "id": "209",
                "text": "209",
                "correct": false
              }
            ],
            "explanation": "125 + 48 = 173; 173 − 36 = 137.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t2-p-1",
            "question": "En un autobús viajan 42 personas, suben 18 y bajan 25. ¿Cuántas quedan?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "35",
                "text": "35",
                "correct": true
              },
              {
                "id": "60",
                "text": "60",
                "correct": false
              },
              {
                "id": "17",
                "text": "17",
                "correct": false
              },
              {
                "id": "85",
                "text": "85",
                "correct": false
              }
            ],
            "explanation": "42 + 18 = 60; 60 − 25 = 35.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t2-p-2",
            "question": "Una tienda tenía 250 globos, vendió 75 y recibió 40. ¿Cuántos tiene?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "215",
                "text": "215",
                "correct": true
              },
              {
                "id": "175",
                "text": "175",
                "correct": false
              },
              {
                "id": "290",
                "text": "290",
                "correct": false
              },
              {
                "id": "365",
                "text": "365",
                "correct": false
              }
            ],
            "explanation": "250 − 75 = 175; 175 + 40 = 215.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t2-p-3",
            "question": "Lucía tiene 38 cromos, gana 27 y regala 19. ¿Cuántos conserva?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "46",
                "text": "46",
                "correct": true
              },
              {
                "id": "65",
                "text": "65",
                "correct": false
              },
              {
                "id": "84",
                "text": "84",
                "correct": false
              },
              {
                "id": "30",
                "text": "30",
                "correct": false
              }
            ],
            "explanation": "38 + 27 = 65; 65 − 19 = 46.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t2-p-4",
            "question": "En dos cajas hay 85 y 64 lápices. Se usan 39. ¿Cuántos quedan?",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "110",
                "text": "110",
                "correct": true
              },
              {
                "id": "149",
                "text": "149",
                "correct": false
              },
              {
                "id": "46",
                "text": "46",
                "correct": false
              },
              {
                "id": "188",
                "text": "188",
                "correct": false
              }
            ],
            "explanation": "85 + 64 = 149; 149 − 39 = 110.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t2-p-5",
            "question": "Un teatro tiene 300 plazas. Se ocupan 126 por la mañana y 98 por la tarde en sesiones distintas. ¿Cuántas más se ocuparon por la mañana?",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "28",
                "text": "28",
                "correct": true
              },
              {
                "id": "224",
                "text": "224",
                "correct": false
              },
              {
                "id": "76",
                "text": "76",
                "correct": false
              },
              {
                "id": "202",
                "text": "202",
                "correct": false
              }
            ],
            "explanation": "126 − 98 = 28; aquí basta una operación al comparar las sesiones.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t2-p-6",
            "question": "Tenías 100 €, gastas 24 € y después 18 €. ¿Cuánto queda?",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "58",
                "text": "58 €",
                "correct": true
              },
              {
                "id": "76",
                "text": "76 €",
                "correct": false
              },
              {
                "id": "42",
                "text": "42 €",
                "correct": false
              },
              {
                "id": "142",
                "text": "142 €",
                "correct": false
              }
            ],
            "explanation": "100 − 24 = 76; 76 − 18 = 58.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t2-p-7",
            "question": "Hay 56 niños y 49 niñas. Faltan 17 alumnos. ¿Cuántos asisten?",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "88",
                "text": "88",
                "correct": true
              },
              {
                "id": "105",
                "text": "105",
                "correct": false
              },
              {
                "id": "122",
                "text": "122",
                "correct": false
              },
              {
                "id": "72",
                "text": "72",
                "correct": false
              }
            ],
            "explanation": "56 + 49 = 105; 105 − 17 = 88.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          }
        ]
      },
      {
        "id": "comprueba",
        "title": "Comprueba tu progreso",
        "subtitle": "Ejercicios mezclados de los contenidos trabajados en el tema",
        "kind": "review",
        "emoji": "🏆",
        "theory": [
          {
            "type": "text",
            "title": "Repaso final",
            "text": "Aquí no hay teoría nueva. Resuelve ejercicios de los apartados que has trabajado en este tema."
          },
          {
            "type": "important",
            "title": "Objetivo",
            "text": "Comprobar que sabes aplicar los conocimientos, no memorizar nombres de secciones."
          },
          {
            "type": "tip",
            "title": "Si fallas",
            "text": "Lee la explicación, vuelve al apartado correspondiente y practica de nuevo."
          }
        ],
        "questions": [
          {
            "id": "tema-02-review-sumas-0",
            "question": "Calcula: 326 + 147",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "473",
                "text": "473",
                "correct": true
              },
              {
                "id": "483",
                "text": "483",
                "correct": false
              },
              {
                "id": "463",
                "text": "463",
                "correct": false
              },
              {
                "id": "474",
                "text": "474",
                "correct": false
              }
            ],
            "explanation": "El resultado correcto es 473. Haz la operación con orden y comprueba el resultado.",
            "hint": "Puedes hacerlo paso a paso."
          },
          {
            "id": "tema-02-review-sumas-1",
            "question": "Calcula: 458 + 236",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "694",
                "text": "694",
                "correct": true
              },
              {
                "id": "704",
                "text": "704",
                "correct": false
              },
              {
                "id": "684",
                "text": "684",
                "correct": false
              },
              {
                "id": "695",
                "text": "695",
                "correct": false
              }
            ],
            "explanation": "El resultado correcto es 694. Haz la operación con orden y comprueba el resultado.",
            "hint": "Puedes hacerlo paso a paso."
          },
          {
            "id": "tema-02-review-estimacion-sumas-0",
            "question": "47 + 32, aproximando a decenas, es aproximadamente…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "80",
                "text": "80",
                "correct": true
              },
              {
                "id": "70",
                "text": "70",
                "correct": false
              },
              {
                "id": "90",
                "text": "90",
                "correct": false
              },
              {
                "id": "79",
                "text": "79",
                "correct": false
              }
            ],
            "explanation": "47 ≈ 50 y 32 ≈ 30; 50 + 30 = 80.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "tema-02-review-estimacion-sumas-1",
            "question": "198 + 304, aproximando a centenas, es…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "500",
                "text": "500",
                "correct": true
              },
              {
                "id": "400",
                "text": "400",
                "correct": false
              },
              {
                "id": "600",
                "text": "600",
                "correct": false
              },
              {
                "id": "502",
                "text": "502",
                "correct": false
              }
            ],
            "explanation": "198 ≈ 200 y 304 ≈ 300.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "tema-02-review-restas-0",
            "question": "Calcula: 684 − 251",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "433",
                "text": "433",
                "correct": true
              },
              {
                "id": "443",
                "text": "443",
                "correct": false
              },
              {
                "id": "423",
                "text": "423",
                "correct": false
              },
              {
                "id": "434",
                "text": "434",
                "correct": false
              }
            ],
            "explanation": "El resultado correcto es 433. Haz la operación con orden y comprueba el resultado.",
            "hint": "Puedes hacerlo paso a paso."
          },
          {
            "id": "tema-02-review-restas-1",
            "question": "Calcula: 903 − 478",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "425",
                "text": "425",
                "correct": true
              },
              {
                "id": "435",
                "text": "435",
                "correct": false
              },
              {
                "id": "415",
                "text": "415",
                "correct": false
              },
              {
                "id": "426",
                "text": "426",
                "correct": false
              }
            ],
            "explanation": "El resultado correcto es 425. Haz la operación con orden y comprueba el resultado.",
            "hint": "Puedes hacerlo paso a paso."
          },
          {
            "id": "tema-02-review-aproximaciones-0",
            "question": "67 aproximado a decenas es…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "70",
                "text": "70",
                "correct": true
              },
              {
                "id": "60",
                "text": "60",
                "correct": false
              },
              {
                "id": "67",
                "text": "67",
                "correct": false
              },
              {
                "id": "80",
                "text": "80",
                "correct": false
              }
            ],
            "explanation": "La unidad es 7, así que aproximamos hacia arriba.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "tema-02-review-aproximaciones-1",
            "question": "243 aproximado a centenas es…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "200",
                "text": "200",
                "correct": true
              },
              {
                "id": "300",
                "text": "300",
                "correct": false
              },
              {
                "id": "240",
                "text": "240",
                "correct": false
              },
              {
                "id": "243",
                "text": "243",
                "correct": false
              }
            ],
            "explanation": "La decena es 4, menor que 5.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "tema-02-review-problemas-dos-operaciones-0",
            "question": "Hay 125 libros, llegan 48 y se prestan 36. ¿Cuántos quedan?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "137",
                "text": "137",
                "correct": true
              },
              {
                "id": "89",
                "text": "89",
                "correct": false
              },
              {
                "id": "173",
                "text": "173",
                "correct": false
              },
              {
                "id": "209",
                "text": "209",
                "correct": false
              }
            ],
            "explanation": "125 + 48 = 173; 173 − 36 = 137.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "tema-02-review-problemas-dos-operaciones-1",
            "question": "En un autobús viajan 42 personas, suben 18 y bajan 25. ¿Cuántas quedan?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "35",
                "text": "35",
                "correct": true
              },
              {
                "id": "60",
                "text": "60",
                "correct": false
              },
              {
                "id": "17",
                "text": "17",
                "correct": false
              },
              {
                "id": "85",
                "text": "85",
                "correct": false
              }
            ],
            "explanation": "42 + 18 = 60; 60 − 25 = 35.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          }
        ]
      }
    ]
  },
  {
    "id": "tema-03",
    "order": 3,
    "title": "Rectas y ángulos",
    "description": "Aprende la teoría, practica con muchos ejercicios y comprueba tu progreso.",
    "emoji": "📐",
    "sections": [
      {
        "id": "rectas",
        "title": "Tipos de rectas",
        "subtitle": "Rectas paralelas, secantes y perpendiculares",
        "kind": "geometry",
        "emoji": "📏",
        "theory": [
          {
            "type": "text",
            "title": "Tipos de rectas",
            "text": "Dos rectas pueden no cortarse, cortarse o cortarse formando cuatro ángulos rectos."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "Paralelas: nunca se cortan.",
              "Secantes: se cortan en un punto.",
              "Perpendiculares: son secantes y forman ángulos rectos.",
              "Una recta no tiene principio ni fin."
            ]
          },
          {
            "type": "example",
            "title": "Ejemplo",
            "text": "Los lados opuestos de un rectángulo están sobre rectas paralelas."
          },
          {
            "type": "tip",
            "title": "Truco MathCrack",
            "text": "Imagina vías de tren para recordar las paralelas."
          }
        ],
        "questions": [
          {
            "id": "t3-r-0",
            "question": "Dos rectas que nunca se cortan son…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "paralelas",
                "text": "paralelas",
                "correct": true
              },
              {
                "id": "secantes",
                "text": "secantes",
                "correct": false
              },
              {
                "id": "perpendiculares",
                "text": "perpendiculares",
                "correct": false
              },
              {
                "id": "segmentos",
                "text": "segmentos",
                "correct": false
              }
            ],
            "explanation": "Las paralelas mantienen siempre la misma distancia.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t3-r-1",
            "question": "Dos rectas que se cortan en un punto son…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "secantes",
                "text": "secantes",
                "correct": true
              },
              {
                "id": "paralelas",
                "text": "paralelas",
                "correct": false
              },
              {
                "id": "curvas",
                "text": "curvas",
                "correct": false
              },
              {
                "id": "semirrectas",
                "text": "semirrectas",
                "correct": false
              }
            ],
            "explanation": "Las secantes tienen un punto común.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t3-r-2",
            "question": "Las rectas perpendiculares forman…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "ngulos-rectos",
                "text": "ángulos rectos",
                "correct": true
              },
              {
                "id": "ngulos-agudos-solamente",
                "text": "ángulos agudos solamente",
                "correct": false
              },
              {
                "id": "c-rculos",
                "text": "círculos",
                "correct": false
              },
              {
                "id": "l-neas-paralelas",
                "text": "líneas paralelas",
                "correct": false
              }
            ],
            "explanation": "Se cortan formando cuatro ángulos de 90°.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t3-r-3",
            "question": "¿Qué ejemplo recuerda a rectas paralelas?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "los-ra-les-de-una-v-a",
                "text": "los raíles de una vía",
                "correct": true
              },
              {
                "id": "las-aspas-abiertas-de-unas-tij",
                "text": "las aspas abiertas de unas tijeras",
                "correct": false
              },
              {
                "id": "una-esquina",
                "text": "una esquina",
                "correct": false
              },
              {
                "id": "dos-caminos-que-se-cruzan",
                "text": "dos caminos que se cruzan",
                "correct": false
              }
            ],
            "explanation": "Los raíles mantienen la distancia y no se cortan.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t3-r-4",
            "question": "Una esquina cuadrada representa rectas…",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "perpendiculares",
                "text": "perpendiculares",
                "correct": true
              },
              {
                "id": "paralelas",
                "text": "paralelas",
                "correct": false
              },
              {
                "id": "curvas",
                "text": "curvas",
                "correct": false
              },
              {
                "id": "coincidentes",
                "text": "coincidentes",
                "correct": false
              }
            ],
            "explanation": "Sus lados forman un ángulo recto.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t3-r-5",
            "question": "¿Pueden ser secantes dos rectas perpendiculares?",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "s",
                "text": "Sí",
                "correct": true
              },
              {
                "id": "no",
                "text": "No",
                "correct": false
              },
              {
                "id": "solo-si-son-curvas",
                "text": "Solo si son curvas",
                "correct": false
              },
              {
                "id": "solo-si-no-se-tocan",
                "text": "Solo si no se tocan",
                "correct": false
              }
            ],
            "explanation": "Toda pareja de perpendiculares es también secante.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t3-r-6",
            "question": "¿Cuántos puntos comunes tienen dos rectas secantes?",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "1",
                "text": "1",
                "correct": true
              },
              {
                "id": "0",
                "text": "0",
                "correct": false
              },
              {
                "id": "2",
                "text": "2",
                "correct": false
              },
              {
                "id": "infinitos",
                "text": "infinitos",
                "correct": false
              }
            ],
            "explanation": "Se cortan en un único punto.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t3-r-7",
            "question": "¿Cuántos puntos comunes tienen dos rectas paralelas distintas?",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "0",
                "text": "0",
                "correct": true
              },
              {
                "id": "1",
                "text": "1",
                "correct": false
              },
              {
                "id": "2",
                "text": "2",
                "correct": false
              },
              {
                "id": "4",
                "text": "4",
                "correct": false
              }
            ],
            "explanation": "Nunca se cortan.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          }
        ]
      },
      {
        "id": "segmentos",
        "title": "Segmentos",
        "subtitle": "Reconocer y medir segmentos",
        "kind": "geometry",
        "emoji": "📏",
        "theory": [
          {
            "type": "text",
            "title": "Segmentos",
            "text": "Un segmento es la parte de una recta comprendida entre dos puntos llamados extremos."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "Tiene dos extremos.",
              "Su longitud puede medirse.",
              "Se nombra con sus extremos, por ejemplo AB.",
              "No es lo mismo que una recta, que se prolonga indefinidamente."
            ]
          },
          {
            "type": "example",
            "title": "Ejemplo",
            "text": "Un lado de un triángulo es un segmento."
          },
          {
            "type": "tip",
            "title": "Truco MathCrack",
            "text": "Busca siempre los dos extremos."
          }
        ],
        "questions": [
          {
            "id": "t3-sg-0",
            "question": "Un segmento tiene…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "dos-extremos",
                "text": "dos extremos",
                "correct": true
              },
              {
                "id": "un-extremo",
                "text": "un extremo",
                "correct": false
              },
              {
                "id": "ning-n-extremo",
                "text": "ningún extremo",
                "correct": false
              },
              {
                "id": "tres-extremos",
                "text": "tres extremos",
                "correct": false
              }
            ],
            "explanation": "Está limitado por dos puntos.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t3-sg-1",
            "question": "¿Se puede medir la longitud de un segmento?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "s",
                "text": "Sí",
                "correct": true
              },
              {
                "id": "no",
                "text": "No",
                "correct": false
              },
              {
                "id": "solo-si-es-vertical",
                "text": "Solo si es vertical",
                "correct": false
              },
              {
                "id": "solo-si-mide-1-cm",
                "text": "Solo si mide 1 cm",
                "correct": false
              }
            ],
            "explanation": "Al estar limitado, su longitud es medible.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t3-sg-2",
            "question": "La parte de una recta entre A y B se llama…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "segmento-ab",
                "text": "segmento AB",
                "correct": true
              },
              {
                "id": "ngulo-ab",
                "text": "ángulo AB",
                "correct": false
              },
              {
                "id": "c-rculo-ab",
                "text": "círculo AB",
                "correct": false
              },
              {
                "id": "recta-paralela",
                "text": "recta paralela",
                "correct": false
              }
            ],
            "explanation": "A y B son sus extremos.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t3-sg-3",
            "question": "¿Cuál tiene principio y fin?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "un-segmento",
                "text": "un segmento",
                "correct": true
              },
              {
                "id": "una-recta",
                "text": "una recta",
                "correct": false
              },
              {
                "id": "una-circunferencia-infinita",
                "text": "una circunferencia infinita",
                "correct": false
              },
              {
                "id": "una-l-nea-sin-extremos",
                "text": "una línea sin extremos",
                "correct": false
              }
            ],
            "explanation": "El segmento está limitado.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t3-sg-4",
            "question": "Los lados de un cuadrado son…",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "segmentos",
                "text": "segmentos",
                "correct": true
              },
              {
                "id": "rectas-infinitas",
                "text": "rectas infinitas",
                "correct": false
              },
              {
                "id": "c-rculos",
                "text": "círculos",
                "correct": false
              },
              {
                "id": "ngulos",
                "text": "ángulos",
                "correct": false
              }
            ],
            "explanation": "Cada lado tiene dos vértices extremos.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t3-sg-5",
            "question": "Si AB mide 5 cm, su longitud es…",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "5-cm",
                "text": "5 cm",
                "correct": true
              },
              {
                "id": "10-cm",
                "text": "10 cm",
                "correct": false
              },
              {
                "id": "5-m",
                "text": "5 m",
                "correct": false
              },
              {
                "id": "no-puede-medirse",
                "text": "no puede medirse",
                "correct": false
              }
            ],
            "explanation": "La medida dada es la longitud del segmento.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t3-sg-6",
            "question": "¿Qué instrumento usamos normalmente para medir un segmento en el cuaderno?",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "regla",
                "text": "regla",
                "correct": true
              },
              {
                "id": "reloj",
                "text": "reloj",
                "correct": false
              },
              {
                "id": "balanza",
                "text": "balanza",
                "correct": false
              },
              {
                "id": "term-metro",
                "text": "termómetro",
                "correct": false
              }
            ],
            "explanation": "La regla permite medir longitudes.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t3-sg-7",
            "question": "Dos segmentos pueden…",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "tener-distinta-longitud",
                "text": "tener distinta longitud",
                "correct": true
              },
              {
                "id": "ser-siempre-iguales",
                "text": "ser siempre iguales",
                "correct": false
              },
              {
                "id": "no-tener-extremos",
                "text": "no tener extremos",
                "correct": false
              },
              {
                "id": "ser-infinitos",
                "text": "ser infinitos",
                "correct": false
              }
            ],
            "explanation": "Los segmentos pueden medir longitudes diferentes.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          }
        ]
      },
      {
        "id": "angulos",
        "title": "Ángulos",
        "subtitle": "Elementos y tipos de ángulos",
        "kind": "geometry",
        "emoji": "📐",
        "theory": [
          {
            "type": "text",
            "title": "Los ángulos",
            "text": "Un ángulo está formado por dos lados que parten de un mismo punto, llamado vértice."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "Agudo: menor que un ángulo recto.",
              "Recto: mide 90°.",
              "Obtuso: mayor que 90° y menor que 180°.",
              "El vértice es el punto común de los lados."
            ]
          },
          {
            "type": "example",
            "title": "Ejemplo",
            "text": "Una esquina de una hoja forma un ángulo recto."
          },
          {
            "type": "tip",
            "title": "Truco MathCrack",
            "text": "Compara visualmente con la esquina de una hoja."
          }
        ],
        "questions": [
          {
            "id": "t3-a-0",
            "question": "Un ángulo de 90° es…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "recto",
                "text": "recto",
                "correct": true
              },
              {
                "id": "agudo",
                "text": "agudo",
                "correct": false
              },
              {
                "id": "obtuso",
                "text": "obtuso",
                "correct": false
              },
              {
                "id": "llano",
                "text": "llano",
                "correct": false
              }
            ],
            "explanation": "El ángulo recto mide 90°.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t3-a-1",
            "question": "Un ángulo menor de 90° es…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "agudo",
                "text": "agudo",
                "correct": true
              },
              {
                "id": "recto",
                "text": "recto",
                "correct": false
              },
              {
                "id": "obtuso",
                "text": "obtuso",
                "correct": false
              },
              {
                "id": "completo",
                "text": "completo",
                "correct": false
              }
            ],
            "explanation": "Los agudos son más cerrados que un ángulo recto.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t3-a-2",
            "question": "Un ángulo mayor de 90° y menor de 180° es…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "obtuso",
                "text": "obtuso",
                "correct": true
              },
              {
                "id": "agudo",
                "text": "agudo",
                "correct": false
              },
              {
                "id": "recto",
                "text": "recto",
                "correct": false
              },
              {
                "id": "nulo",
                "text": "nulo",
                "correct": false
              }
            ],
            "explanation": "Los obtusos son más abiertos que el recto.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t3-a-3",
            "question": "El punto común de los lados de un ángulo es…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "v-rtice",
                "text": "vértice",
                "correct": true
              },
              {
                "id": "centro",
                "text": "centro",
                "correct": false
              },
              {
                "id": "radio",
                "text": "radio",
                "correct": false
              },
              {
                "id": "di-metro",
                "text": "diámetro",
                "correct": false
              }
            ],
            "explanation": "Los dos lados nacen en el vértice.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t3-a-4",
            "question": "Una esquina de un folio forma aproximadamente un ángulo…",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "recto",
                "text": "recto",
                "correct": true
              },
              {
                "id": "agudo",
                "text": "agudo",
                "correct": false
              },
              {
                "id": "obtuso",
                "text": "obtuso",
                "correct": false
              },
              {
                "id": "de-45",
                "text": "de 45°",
                "correct": false
              }
            ],
            "explanation": "Las esquinas de un rectángulo son rectas.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t3-a-5",
            "question": "45° corresponde a un ángulo…",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "agudo",
                "text": "agudo",
                "correct": true
              },
              {
                "id": "recto",
                "text": "recto",
                "correct": false
              },
              {
                "id": "obtuso",
                "text": "obtuso",
                "correct": false
              },
              {
                "id": "llano",
                "text": "llano",
                "correct": false
              }
            ],
            "explanation": "45 es menor que 90.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t3-a-6",
            "question": "120° corresponde a un ángulo…",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "obtuso",
                "text": "obtuso",
                "correct": true
              },
              {
                "id": "agudo",
                "text": "agudo",
                "correct": false
              },
              {
                "id": "recto",
                "text": "recto",
                "correct": false
              },
              {
                "id": "nulo",
                "text": "nulo",
                "correct": false
              }
            ],
            "explanation": "120 está entre 90 y 180.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t3-a-7",
            "question": "¿Cuántos grados mide un ángulo recto?",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "90",
                "text": "90°",
                "correct": true
              },
              {
                "id": "45",
                "text": "45°",
                "correct": false
              },
              {
                "id": "100",
                "text": "100°",
                "correct": false
              },
              {
                "id": "180",
                "text": "180°",
                "correct": false
              }
            ],
            "explanation": "Por definición, 90°.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          }
        ]
      },
      {
        "id": "simetria",
        "title": "Simetría y traslación",
        "subtitle": "Reconocer figuras simétricas y desplazamientos",
        "kind": "geometry",
        "emoji": "🪞",
        "theory": [
          {
            "type": "text",
            "title": "Simetría y traslación",
            "text": "Una figura es simétrica si puede dividirse por un eje en dos partes que coinciden como en un espejo. Una traslación desplaza una figura sin girarla ni cambiar su forma."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "Eje de simetría: línea que divide en partes espejo.",
              "La traslación conserva tamaño y forma.",
              "Trasladar no es girar.",
              "Los puntos se desplazan la misma distancia y dirección."
            ]
          },
          {
            "type": "example",
            "title": "Ejemplo",
            "text": "Una mariposa puede aproximarse a una figura con eje de simetría vertical."
          },
          {
            "type": "tip",
            "title": "Truco MathCrack",
            "text": "Piensa en un espejo para simetría y en deslizar una ficha para traslación."
          }
        ],
        "questions": [
          {
            "id": "t3-si-0",
            "question": "La línea que divide una figura en dos partes espejo es…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "eje-de-simetr-a",
                "text": "eje de simetría",
                "correct": true
              },
              {
                "id": "radio",
                "text": "radio",
                "correct": false
              },
              {
                "id": "di-metro",
                "text": "diámetro",
                "correct": false
              },
              {
                "id": "segmento-de-medida",
                "text": "segmento de medida",
                "correct": false
              }
            ],
            "explanation": "Es el eje de simetría.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t3-si-1",
            "question": "En una traslación, la figura…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "se-desplaza-sin-cambiar-de-for",
                "text": "se desplaza sin cambiar de forma",
                "correct": true
              },
              {
                "id": "se-hace-m-s-grande",
                "text": "se hace más grande",
                "correct": false
              },
              {
                "id": "se-gira-siempre",
                "text": "se gira siempre",
                "correct": false
              },
              {
                "id": "desaparece",
                "text": "desaparece",
                "correct": false
              }
            ],
            "explanation": "Trasladar es deslizar.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t3-si-2",
            "question": "Una figura simétrica respecto a un eje tiene partes…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "que-coinciden-como-en-un-espej",
                "text": "que coinciden como en un espejo",
                "correct": true
              },
              {
                "id": "siempre-de-distinto-tama-o",
                "text": "siempre de distinto tamaño",
                "correct": false
              },
              {
                "id": "sin-relaci-n",
                "text": "sin relación",
                "correct": false
              },
              {
                "id": "solo-circulares",
                "text": "solo circulares",
                "correct": false
              }
            ],
            "explanation": "La simetría refleja una mitad en la otra.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t3-si-3",
            "question": "¿Trasladar una figura cambia su tamaño?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "no",
                "text": "No",
                "correct": true
              },
              {
                "id": "s-siempre",
                "text": "Sí, siempre",
                "correct": false
              },
              {
                "id": "solo-si-es-un-cuadrado",
                "text": "Solo si es un cuadrado",
                "correct": false
              },
              {
                "id": "la-duplica",
                "text": "La duplica",
                "correct": false
              }
            ],
            "explanation": "Conserva forma y tamaño.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t3-si-4",
            "question": "¿Una mariposa puede servir como ejemplo de simetría?",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "s",
                "text": "Sí",
                "correct": true
              },
              {
                "id": "no",
                "text": "No",
                "correct": false
              },
              {
                "id": "solo-si-vuela",
                "text": "Solo si vuela",
                "correct": false
              },
              {
                "id": "nunca",
                "text": "Nunca",
                "correct": false
              }
            ],
            "explanation": "Su cuerpo puede actuar como eje aproximado.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t3-si-5",
            "question": "Mover una ficha 3 cuadros a la derecha sin girarla es…",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "una-traslaci-n",
                "text": "una traslación",
                "correct": true
              },
              {
                "id": "una-simetr-a-axial",
                "text": "una simetría axial",
                "correct": false
              },
              {
                "id": "una-multiplicaci-n",
                "text": "una multiplicación",
                "correct": false
              },
              {
                "id": "un-ngulo",
                "text": "un ángulo",
                "correct": false
              }
            ],
            "explanation": "Se desplaza manteniendo orientación.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t3-si-6",
            "question": "¿El eje de simetría debe dejar dos partes correspondientes?",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "s",
                "text": "Sí",
                "correct": true
              },
              {
                "id": "no",
                "text": "No",
                "correct": false
              },
              {
                "id": "solo-en-tri-ngulos",
                "text": "Solo en triángulos",
                "correct": false
              },
              {
                "id": "solo-en-c-rculos",
                "text": "Solo en círculos",
                "correct": false
              }
            ],
            "explanation": "Las dos partes deben corresponder como reflejos.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t3-si-7",
            "question": "Una traslación conserva…",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "forma-y-tama-o",
                "text": "forma y tamaño",
                "correct": true
              },
              {
                "id": "solo-el-color",
                "text": "solo el color",
                "correct": false
              },
              {
                "id": "solo-el-nombre",
                "text": "solo el nombre",
                "correct": false
              },
              {
                "id": "ninguna-propiedad",
                "text": "ninguna propiedad",
                "correct": false
              }
            ],
            "explanation": "La figura no se deforma.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          }
        ]
      },
      {
        "id": "comprueba",
        "title": "Comprueba tu progreso",
        "subtitle": "Ejercicios mezclados de los contenidos trabajados en el tema",
        "kind": "review",
        "emoji": "🏆",
        "theory": [
          {
            "type": "text",
            "title": "Repaso final",
            "text": "Aquí no hay teoría nueva. Resuelve ejercicios de los apartados que has trabajado en este tema."
          },
          {
            "type": "important",
            "title": "Objetivo",
            "text": "Comprobar que sabes aplicar los conocimientos, no memorizar nombres de secciones."
          },
          {
            "type": "tip",
            "title": "Si fallas",
            "text": "Lee la explicación, vuelve al apartado correspondiente y practica de nuevo."
          }
        ],
        "questions": [
          {
            "id": "tema-03-review-rectas-0",
            "question": "Dos rectas que nunca se cortan son…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "paralelas",
                "text": "paralelas",
                "correct": true
              },
              {
                "id": "secantes",
                "text": "secantes",
                "correct": false
              },
              {
                "id": "perpendiculares",
                "text": "perpendiculares",
                "correct": false
              },
              {
                "id": "segmentos",
                "text": "segmentos",
                "correct": false
              }
            ],
            "explanation": "Las paralelas mantienen siempre la misma distancia.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "tema-03-review-rectas-1",
            "question": "Dos rectas que se cortan en un punto son…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "secantes",
                "text": "secantes",
                "correct": true
              },
              {
                "id": "paralelas",
                "text": "paralelas",
                "correct": false
              },
              {
                "id": "curvas",
                "text": "curvas",
                "correct": false
              },
              {
                "id": "semirrectas",
                "text": "semirrectas",
                "correct": false
              }
            ],
            "explanation": "Las secantes tienen un punto común.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "tema-03-review-segmentos-0",
            "question": "Un segmento tiene…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "dos-extremos",
                "text": "dos extremos",
                "correct": true
              },
              {
                "id": "un-extremo",
                "text": "un extremo",
                "correct": false
              },
              {
                "id": "ning-n-extremo",
                "text": "ningún extremo",
                "correct": false
              },
              {
                "id": "tres-extremos",
                "text": "tres extremos",
                "correct": false
              }
            ],
            "explanation": "Está limitado por dos puntos.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "tema-03-review-segmentos-1",
            "question": "¿Se puede medir la longitud de un segmento?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "s",
                "text": "Sí",
                "correct": true
              },
              {
                "id": "no",
                "text": "No",
                "correct": false
              },
              {
                "id": "solo-si-es-vertical",
                "text": "Solo si es vertical",
                "correct": false
              },
              {
                "id": "solo-si-mide-1-cm",
                "text": "Solo si mide 1 cm",
                "correct": false
              }
            ],
            "explanation": "Al estar limitado, su longitud es medible.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "tema-03-review-angulos-0",
            "question": "Un ángulo de 90° es…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "recto",
                "text": "recto",
                "correct": true
              },
              {
                "id": "agudo",
                "text": "agudo",
                "correct": false
              },
              {
                "id": "obtuso",
                "text": "obtuso",
                "correct": false
              },
              {
                "id": "llano",
                "text": "llano",
                "correct": false
              }
            ],
            "explanation": "El ángulo recto mide 90°.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "tema-03-review-angulos-1",
            "question": "Un ángulo menor de 90° es…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "agudo",
                "text": "agudo",
                "correct": true
              },
              {
                "id": "recto",
                "text": "recto",
                "correct": false
              },
              {
                "id": "obtuso",
                "text": "obtuso",
                "correct": false
              },
              {
                "id": "completo",
                "text": "completo",
                "correct": false
              }
            ],
            "explanation": "Los agudos son más cerrados que un ángulo recto.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "tema-03-review-simetria-0",
            "question": "La línea que divide una figura en dos partes espejo es…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "eje-de-simetr-a",
                "text": "eje de simetría",
                "correct": true
              },
              {
                "id": "radio",
                "text": "radio",
                "correct": false
              },
              {
                "id": "di-metro",
                "text": "diámetro",
                "correct": false
              },
              {
                "id": "segmento-de-medida",
                "text": "segmento de medida",
                "correct": false
              }
            ],
            "explanation": "Es el eje de simetría.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "tema-03-review-simetria-1",
            "question": "En una traslación, la figura…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "se-desplaza-sin-cambiar-de-for",
                "text": "se desplaza sin cambiar de forma",
                "correct": true
              },
              {
                "id": "se-hace-m-s-grande",
                "text": "se hace más grande",
                "correct": false
              },
              {
                "id": "se-gira-siempre",
                "text": "se gira siempre",
                "correct": false
              },
              {
                "id": "desaparece",
                "text": "desaparece",
                "correct": false
              }
            ],
            "explanation": "Trasladar es deslizar.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          }
        ]
      }
    ]
  },
  {
    "id": "tema-04",
    "order": 4,
    "title": "La multiplicación",
    "description": "Aprende la teoría, practica con muchos ejercicios y comprueba tu progreso.",
    "emoji": "✖️",
    "sections": [
      {
        "id": "suma-multiplicacion",
        "title": "Suma y multiplicación",
        "subtitle": "Entender la multiplicación como suma de sumandos iguales",
        "kind": "calculation",
        "emoji": "✖️",
        "theory": [
          {
            "type": "text",
            "title": "Multiplicar",
            "text": "Multiplicar permite expresar de forma breve una suma de sumandos iguales."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "4 + 4 + 4 = 3 × 4",
              "3 es el número de grupos y 4 lo que hay en cada grupo.",
              "El resultado se llama producto.",
              "Cambiar el orden de los factores no cambia el producto."
            ]
          },
          {
            "type": "example",
            "title": "Ejemplo",
            "text": "5 grupos de 3 objetos: 5 × 3 = 15."
          },
          {
            "type": "tip",
            "title": "Truco MathCrack",
            "text": "Dibuja grupos iguales si necesitas entender la operación."
          }
        ],
        "questions": [
          {
            "id": "t4-sm-0",
            "question": "4 + 4 + 4 equivale a…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "3-4",
                "text": "3 × 4",
                "correct": true
              },
              {
                "id": "4-4",
                "text": "4 × 4",
                "correct": false
              },
              {
                "id": "3-4",
                "text": "3 + 4",
                "correct": false
              },
              {
                "id": "4-2",
                "text": "4 × 2",
                "correct": false
              }
            ],
            "explanation": "Hay 3 sumandos iguales a 4.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t4-sm-1",
            "question": "5 grupos de 2 son…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "10",
                "text": "10",
                "correct": true
              },
              {
                "id": "7",
                "text": "7",
                "correct": false
              },
              {
                "id": "25",
                "text": "25",
                "correct": false
              },
              {
                "id": "3",
                "text": "3",
                "correct": false
              }
            ],
            "explanation": "5 × 2 = 10.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t4-sm-2",
            "question": "¿Cómo se llama el resultado de una multiplicación?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "producto",
                "text": "producto",
                "correct": true
              },
              {
                "id": "suma",
                "text": "suma",
                "correct": false
              },
              {
                "id": "diferencia",
                "text": "diferencia",
                "correct": false
              },
              {
                "id": "cociente",
                "text": "cociente",
                "correct": false
              }
            ],
            "explanation": "El resultado es el producto.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t4-sm-3",
            "question": "6 × 3 = …",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "18",
                "text": "18",
                "correct": true
              },
              {
                "id": "9",
                "text": "9",
                "correct": false
              },
              {
                "id": "12",
                "text": "12",
                "correct": false
              },
              {
                "id": "24",
                "text": "24",
                "correct": false
              }
            ],
            "explanation": "6 grupos de 3 hacen 18.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t4-sm-4",
            "question": "2 × 7 y 7 × 2…",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "dan-el-mismo-resultado",
                "text": "dan el mismo resultado",
                "correct": true
              },
              {
                "id": "siempre-son-distintos",
                "text": "siempre son distintos",
                "correct": false
              },
              {
                "id": "no-se-pueden-calcular",
                "text": "no se pueden calcular",
                "correct": false
              },
              {
                "id": "son-restas",
                "text": "son restas",
                "correct": false
              }
            ],
            "explanation": "La multiplicación es conmutativa.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t4-sm-5",
            "question": "8 + 8 + 8 + 8 = …",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "4-8",
                "text": "4 × 8",
                "correct": true
              },
              {
                "id": "8-8",
                "text": "8 × 8",
                "correct": false
              },
              {
                "id": "4-8",
                "text": "4 + 8",
                "correct": false
              },
              {
                "id": "3-8",
                "text": "3 × 8",
                "correct": false
              }
            ],
            "explanation": "Hay 4 ochos.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t4-sm-6",
            "question": "3 cajas con 6 lápices cada una contienen…",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "18-l-pices",
                "text": "18 lápices",
                "correct": true
              },
              {
                "id": "9-l-pices",
                "text": "9 lápices",
                "correct": false
              },
              {
                "id": "36-l-pices",
                "text": "36 lápices",
                "correct": false
              },
              {
                "id": "3-l-pices",
                "text": "3 lápices",
                "correct": false
              }
            ],
            "explanation": "3 × 6 = 18.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t4-sm-7",
            "question": "¿Qué operación representa grupos iguales?",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "multiplicaci-n",
                "text": "multiplicación",
                "correct": true
              },
              {
                "id": "resta",
                "text": "resta",
                "correct": false
              },
              {
                "id": "comparaci-n",
                "text": "comparación",
                "correct": false
              },
              {
                "id": "aproximaci-n",
                "text": "aproximación",
                "correct": false
              }
            ],
            "explanation": "La multiplicación modela sumas repetidas.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          }
        ]
      },
      {
        "id": "tablas",
        "title": "Tablas del 2 al 9",
        "subtitle": "Dominar las tablas de multiplicar",
        "kind": "calculation",
        "emoji": "🧠",
        "theory": [
          {
            "type": "text",
            "title": "Las tablas",
            "text": "Las tablas permiten calcular productos básicos con rapidez y son necesarias para multiplicar y dividir."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "Repasa del 2 al 9.",
              "Relaciona productos: 7 × 4 = 4 × 7.",
              "Busca patrones.",
              "Practica cada día unos minutos."
            ]
          },
          {
            "type": "example",
            "title": "Ejemplo",
            "text": "8 × 7 = 56."
          },
          {
            "type": "tip",
            "title": "Truco MathCrack",
            "text": "Si dudas, usa una suma repetida y después intenta recordarlo."
          }
        ],
        "questions": [
          {
            "id": "t4-tab-0",
            "question": "7 × 6 = ?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "42",
                "text": "42",
                "correct": true
              },
              {
                "id": "49",
                "text": "49",
                "correct": false
              },
              {
                "id": "36",
                "text": "36",
                "correct": false
              },
              {
                "id": "13",
                "text": "13",
                "correct": false
              }
            ],
            "explanation": "7 × 6 = 42."
          },
          {
            "id": "t4-tab-1",
            "question": "8 × 4 = ?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "32",
                "text": "32",
                "correct": true
              },
              {
                "id": "40",
                "text": "40",
                "correct": false
              },
              {
                "id": "28",
                "text": "28",
                "correct": false
              },
              {
                "id": "12",
                "text": "12",
                "correct": false
              }
            ],
            "explanation": "8 × 4 = 32."
          },
          {
            "id": "t4-tab-2",
            "question": "9 × 3 = ?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "27",
                "text": "27",
                "correct": true
              },
              {
                "id": "36",
                "text": "36",
                "correct": false
              },
              {
                "id": "24",
                "text": "24",
                "correct": false
              },
              {
                "id": "12",
                "text": "12",
                "correct": false
              }
            ],
            "explanation": "9 × 3 = 27."
          },
          {
            "id": "t4-tab-3",
            "question": "6 × 5 = ?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "30",
                "text": "30",
                "correct": true
              },
              {
                "id": "36",
                "text": "36",
                "correct": false
              },
              {
                "id": "25",
                "text": "25",
                "correct": false
              },
              {
                "id": "11",
                "text": "11",
                "correct": false
              }
            ],
            "explanation": "6 × 5 = 30."
          },
          {
            "id": "t4-tab-4",
            "question": "4 × 7 = ?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "28",
                "text": "28",
                "correct": true
              },
              {
                "id": "32",
                "text": "32",
                "correct": false
              },
              {
                "id": "21",
                "text": "21",
                "correct": false
              },
              {
                "id": "11",
                "text": "11",
                "correct": false
              }
            ],
            "explanation": "4 × 7 = 28."
          },
          {
            "id": "t4-tab-5",
            "question": "8 × 8 = ?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "64",
                "text": "64",
                "correct": true
              },
              {
                "id": "72",
                "text": "72",
                "correct": false
              },
              {
                "id": "56",
                "text": "56",
                "correct": false
              },
              {
                "id": "16",
                "text": "16",
                "correct": false
              }
            ],
            "explanation": "8 × 8 = 64."
          },
          {
            "id": "t4-tab-6",
            "question": "9 × 7 = ?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "63",
                "text": "63",
                "correct": true
              },
              {
                "id": "72",
                "text": "72",
                "correct": false
              },
              {
                "id": "56",
                "text": "56",
                "correct": false
              },
              {
                "id": "16",
                "text": "16",
                "correct": false
              }
            ],
            "explanation": "9 × 7 = 63."
          },
          {
            "id": "t4-tab-7",
            "question": "3 × 6 = ?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "18",
                "text": "18",
                "correct": true
              },
              {
                "id": "21",
                "text": "21",
                "correct": false
              },
              {
                "id": "12",
                "text": "12",
                "correct": false
              },
              {
                "id": "9",
                "text": "9",
                "correct": false
              }
            ],
            "explanation": "3 × 6 = 18."
          },
          {
            "id": "t4-tab-8",
            "question": "5 × 9 = ?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "45",
                "text": "45",
                "correct": true
              },
              {
                "id": "50",
                "text": "50",
                "correct": false
              },
              {
                "id": "36",
                "text": "36",
                "correct": false
              },
              {
                "id": "14",
                "text": "14",
                "correct": false
              }
            ],
            "explanation": "5 × 9 = 45."
          },
          {
            "id": "t4-tab-9",
            "question": "7 × 8 = ?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "56",
                "text": "56",
                "correct": true
              },
              {
                "id": "63",
                "text": "63",
                "correct": false
              },
              {
                "id": "48",
                "text": "48",
                "correct": false
              },
              {
                "id": "15",
                "text": "15",
                "correct": false
              }
            ],
            "explanation": "7 × 8 = 56."
          },
          {
            "id": "t4-tab-10",
            "question": "6 × 6 = ?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "36",
                "text": "36",
                "correct": true
              },
              {
                "id": "42",
                "text": "42",
                "correct": false
              },
              {
                "id": "30",
                "text": "30",
                "correct": false
              },
              {
                "id": "12",
                "text": "12",
                "correct": false
              }
            ],
            "explanation": "6 × 6 = 36."
          },
          {
            "id": "t4-tab-11",
            "question": "9 × 9 = ?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "81",
                "text": "81",
                "correct": true
              },
              {
                "id": "90",
                "text": "90",
                "correct": false
              },
              {
                "id": "72",
                "text": "72",
                "correct": false
              },
              {
                "id": "18",
                "text": "18",
                "correct": false
              }
            ],
            "explanation": "9 × 9 = 81."
          }
        ]
      },
      {
        "id": "doble-triple",
        "title": "Doble y triple",
        "subtitle": "Calcular el doble y el triple de una cantidad",
        "kind": "calculation",
        "emoji": "2×",
        "theory": [
          {
            "type": "text",
            "title": "Doble y triple",
            "text": "El doble de un número es multiplicarlo por 2. El triple es multiplicarlo por 3."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "Doble de 7 = 14",
              "Triple de 7 = 21",
              "Doble = dos veces",
              "Triple = tres veces"
            ]
          },
          {
            "type": "example",
            "title": "Ejemplo",
            "text": "El triple de 12 es 12 × 3 = 36."
          },
          {
            "type": "tip",
            "title": "Truco MathCrack",
            "text": "Relaciona doble con la tabla del 2 y triple con la tabla del 3."
          }
        ],
        "questions": [
          {
            "id": "t4-dt-0",
            "question": "Doble de 8",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "16",
                "text": "16",
                "correct": true
              },
              {
                "id": "10",
                "text": "10",
                "correct": false
              },
              {
                "id": "24",
                "text": "24",
                "correct": false
              },
              {
                "id": "4",
                "text": "4",
                "correct": false
              }
            ],
            "explanation": "8 × 2 = 16.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t4-dt-1",
            "question": "Triple de 8",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "24",
                "text": "24",
                "correct": true
              },
              {
                "id": "16",
                "text": "16",
                "correct": false
              },
              {
                "id": "11",
                "text": "11",
                "correct": false
              },
              {
                "id": "32",
                "text": "32",
                "correct": false
              }
            ],
            "explanation": "8 × 3 = 24.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t4-dt-2",
            "question": "Doble de 25",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "50",
                "text": "50",
                "correct": true
              },
              {
                "id": "27",
                "text": "27",
                "correct": false
              },
              {
                "id": "75",
                "text": "75",
                "correct": false
              },
              {
                "id": "100",
                "text": "100",
                "correct": false
              }
            ],
            "explanation": "25 × 2 = 50.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t4-dt-3",
            "question": "Triple de 12",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "36",
                "text": "36",
                "correct": true
              },
              {
                "id": "24",
                "text": "24",
                "correct": false
              },
              {
                "id": "15",
                "text": "15",
                "correct": false
              },
              {
                "id": "48",
                "text": "48",
                "correct": false
              }
            ],
            "explanation": "12 × 3 = 36.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t4-dt-4",
            "question": "Si el doble de un número es 18, el número es…",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "9",
                "text": "9",
                "correct": true
              },
              {
                "id": "36",
                "text": "36",
                "correct": false
              },
              {
                "id": "16",
                "text": "16",
                "correct": false
              },
              {
                "id": "6",
                "text": "6",
                "correct": false
              }
            ],
            "explanation": "9 × 2 = 18.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t4-dt-5",
            "question": "El triple de 20 es…",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "60",
                "text": "60",
                "correct": true
              },
              {
                "id": "40",
                "text": "40",
                "correct": false
              },
              {
                "id": "23",
                "text": "23",
                "correct": false
              },
              {
                "id": "80",
                "text": "80",
                "correct": false
              }
            ],
            "explanation": "20 × 3 = 60.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t4-dt-6",
            "question": "Dos veces 14 es…",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "28",
                "text": "28",
                "correct": true
              },
              {
                "id": "42",
                "text": "42",
                "correct": false
              },
              {
                "id": "16",
                "text": "16",
                "correct": false
              },
              {
                "id": "7",
                "text": "7",
                "correct": false
              }
            ],
            "explanation": "Es el doble.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t4-dt-7",
            "question": "Tres veces 15 es…",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "45",
                "text": "45",
                "correct": true
              },
              {
                "id": "30",
                "text": "30",
                "correct": false
              },
              {
                "id": "18",
                "text": "18",
                "correct": false
              },
              {
                "id": "60",
                "text": "60",
                "correct": false
              }
            ],
            "explanation": "Es el triple.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          }
        ]
      },
      {
        "id": "multiplicaciones-sin-llevar",
        "title": "Multiplicaciones sin llevar",
        "subtitle": "Multiplicar un número de varias cifras por una cifra",
        "kind": "calculation",
        "emoji": "🧮",
        "theory": [
          {
            "type": "text",
            "title": "Multiplicar sin llevar",
            "text": "Multiplica la cifra de las unidades y después las decenas y centenas, siempre por el mismo factor."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "Empieza por las unidades.",
              "Continúa hacia la izquierda.",
              "Coloca cada resultado en su orden.",
              "Si ningún producto llega a 10, no hay llevadas."
            ]
          },
          {
            "type": "example",
            "title": "Ejemplo",
            "text": "213 × 3 = 639."
          },
          {
            "type": "tip",
            "title": "Truco MathCrack",
            "text": "Multiplica cada orden por separado: 3×3, 1×3, 2×3."
          }
        ],
        "questions": [
          {
            "id": "t4-ms-0",
            "question": "Calcula: 23 × 4",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "92",
                "text": "92",
                "correct": true
              },
              {
                "id": "102",
                "text": "102",
                "correct": false
              },
              {
                "id": "82",
                "text": "82",
                "correct": false
              },
              {
                "id": "93",
                "text": "93",
                "correct": false
              }
            ],
            "explanation": "El resultado correcto es 92. Haz la operación con orden y comprueba el resultado.",
            "hint": "Puedes hacerlo paso a paso."
          },
          {
            "id": "t4-ms-1",
            "question": "Calcula: 42 × 3",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "126",
                "text": "126",
                "correct": true
              },
              {
                "id": "136",
                "text": "136",
                "correct": false
              },
              {
                "id": "116",
                "text": "116",
                "correct": false
              },
              {
                "id": "127",
                "text": "127",
                "correct": false
              }
            ],
            "explanation": "El resultado correcto es 126. Haz la operación con orden y comprueba el resultado.",
            "hint": "Puedes hacerlo paso a paso."
          },
          {
            "id": "t4-ms-2",
            "question": "Calcula: 31 × 6",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "186",
                "text": "186",
                "correct": true
              },
              {
                "id": "196",
                "text": "196",
                "correct": false
              },
              {
                "id": "176",
                "text": "176",
                "correct": false
              },
              {
                "id": "187",
                "text": "187",
                "correct": false
              }
            ],
            "explanation": "El resultado correcto es 186. Haz la operación con orden y comprueba el resultado.",
            "hint": "Puedes hacerlo paso a paso."
          },
          {
            "id": "t4-ms-3",
            "question": "Calcula: 54 × 7",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "378",
                "text": "378",
                "correct": true
              },
              {
                "id": "388",
                "text": "388",
                "correct": false
              },
              {
                "id": "368",
                "text": "368",
                "correct": false
              },
              {
                "id": "379",
                "text": "379",
                "correct": false
              }
            ],
            "explanation": "El resultado correcto es 378. Haz la operación con orden y comprueba el resultado.",
            "hint": "Puedes hacerlo paso a paso."
          },
          {
            "id": "t4-ms-4",
            "question": "Calcula: 68 × 5",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "340",
                "text": "340",
                "correct": true
              },
              {
                "id": "350",
                "text": "350",
                "correct": false
              },
              {
                "id": "330",
                "text": "330",
                "correct": false
              },
              {
                "id": "341",
                "text": "341",
                "correct": false
              }
            ],
            "explanation": "El resultado correcto es 340. Haz la operación con orden y comprueba el resultado.",
            "hint": "Puedes hacerlo paso a paso."
          },
          {
            "id": "t4-ms-5",
            "question": "Calcula: 37 × 8",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "296",
                "text": "296",
                "correct": true
              },
              {
                "id": "306",
                "text": "306",
                "correct": false
              },
              {
                "id": "286",
                "text": "286",
                "correct": false
              },
              {
                "id": "297",
                "text": "297",
                "correct": false
              }
            ],
            "explanation": "El resultado correcto es 296. Haz la operación con orden y comprueba el resultado.",
            "hint": "Puedes hacerlo paso a paso."
          },
          {
            "id": "t4-ms-6",
            "question": "Calcula: 46 × 9",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "414",
                "text": "414",
                "correct": true
              },
              {
                "id": "424",
                "text": "424",
                "correct": false
              },
              {
                "id": "404",
                "text": "404",
                "correct": false
              },
              {
                "id": "415",
                "text": "415",
                "correct": false
              }
            ],
            "explanation": "El resultado correcto es 414. Haz la operación con orden y comprueba el resultado.",
            "hint": "Puedes hacerlo paso a paso."
          },
          {
            "id": "t4-ms-7",
            "question": "Calcula: 125 × 3",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "375",
                "text": "375",
                "correct": true
              },
              {
                "id": "385",
                "text": "385",
                "correct": false
              },
              {
                "id": "365",
                "text": "365",
                "correct": false
              },
              {
                "id": "376",
                "text": "376",
                "correct": false
              }
            ],
            "explanation": "El resultado correcto es 375. Haz la operación con orden y comprueba el resultado.",
            "hint": "Puedes hacerlo paso a paso."
          },
          {
            "id": "t4-ms-8",
            "question": "Calcula: 214 × 4",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "856",
                "text": "856",
                "correct": true
              },
              {
                "id": "866",
                "text": "866",
                "correct": false
              },
              {
                "id": "846",
                "text": "846",
                "correct": false
              },
              {
                "id": "857",
                "text": "857",
                "correct": false
              }
            ],
            "explanation": "El resultado correcto es 856. Haz la operación con orden y comprueba el resultado.",
            "hint": "Puedes hacerlo paso a paso."
          },
          {
            "id": "t4-ms-9",
            "question": "Calcula: 306 × 2",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "612",
                "text": "612",
                "correct": true
              },
              {
                "id": "622",
                "text": "622",
                "correct": false
              },
              {
                "id": "602",
                "text": "602",
                "correct": false
              },
              {
                "id": "613",
                "text": "613",
                "correct": false
              }
            ],
            "explanation": "El resultado correcto es 612. Haz la operación con orden y comprueba el resultado.",
            "hint": "Puedes hacerlo paso a paso."
          }
        ]
      },
      {
        "id": "calculo-mental",
        "title": "Cálculo mental",
        "subtitle": "Dobles y productos básicos",
        "kind": "mental",
        "emoji": "⚡",
        "theory": [
          {
            "type": "text",
            "title": "Cálculo mental",
            "text": "Usar dobles y tablas conocidas permite resolver operaciones sin escribir el algoritmo."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "Doble de 24 = 48",
              "5 × 8 = 40",
              "10 × 7 = 70",
              "Descompón cuando sea útil."
            ]
          },
          {
            "type": "example",
            "title": "Ejemplo",
            "text": "Doble de 35 = 70."
          },
          {
            "type": "tip",
            "title": "Truco MathCrack",
            "text": "Busca relaciones con tablas que ya sabes."
          }
        ],
        "questions": [
          {
            "id": "t4-m-0",
            "question": "¿Cuál es el doble de 6?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "12",
                "text": "12",
                "correct": true
              },
              {
                "id": "14",
                "text": "14",
                "correct": false
              },
              {
                "id": "8",
                "text": "8",
                "correct": false
              },
              {
                "id": "10",
                "text": "10",
                "correct": false
              }
            ],
            "explanation": "El doble es sumar 6 dos veces: 12."
          },
          {
            "id": "t4-m-1",
            "question": "¿Cuál es el doble de 8?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "16",
                "text": "16",
                "correct": true
              },
              {
                "id": "18",
                "text": "18",
                "correct": false
              },
              {
                "id": "10",
                "text": "10",
                "correct": false
              },
              {
                "id": "14",
                "text": "14",
                "correct": false
              }
            ],
            "explanation": "El doble es sumar 8 dos veces: 16."
          },
          {
            "id": "t4-m-2",
            "question": "¿Cuál es el doble de 12?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "24",
                "text": "24",
                "correct": true
              },
              {
                "id": "26",
                "text": "26",
                "correct": false
              },
              {
                "id": "14",
                "text": "14",
                "correct": false
              },
              {
                "id": "22",
                "text": "22",
                "correct": false
              }
            ],
            "explanation": "El doble es sumar 12 dos veces: 24."
          },
          {
            "id": "t4-m-3",
            "question": "¿Cuál es el doble de 15?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "30",
                "text": "30",
                "correct": true
              },
              {
                "id": "32",
                "text": "32",
                "correct": false
              },
              {
                "id": "17",
                "text": "17",
                "correct": false
              },
              {
                "id": "28",
                "text": "28",
                "correct": false
              }
            ],
            "explanation": "El doble es sumar 15 dos veces: 30."
          },
          {
            "id": "t4-m-4",
            "question": "¿Cuál es el doble de 24?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "48",
                "text": "48",
                "correct": true
              },
              {
                "id": "50",
                "text": "50",
                "correct": false
              },
              {
                "id": "26",
                "text": "26",
                "correct": false
              },
              {
                "id": "46",
                "text": "46",
                "correct": false
              }
            ],
            "explanation": "El doble es sumar 24 dos veces: 48."
          },
          {
            "id": "t4-m-5",
            "question": "¿Cuál es el doble de 35?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "70",
                "text": "70",
                "correct": true
              },
              {
                "id": "72",
                "text": "72",
                "correct": false
              },
              {
                "id": "37",
                "text": "37",
                "correct": false
              },
              {
                "id": "68",
                "text": "68",
                "correct": false
              }
            ],
            "explanation": "El doble es sumar 35 dos veces: 70."
          },
          {
            "id": "t4-m-6",
            "question": "¿Cuál es el doble de 42?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "84",
                "text": "84",
                "correct": true
              },
              {
                "id": "86",
                "text": "86",
                "correct": false
              },
              {
                "id": "44",
                "text": "44",
                "correct": false
              },
              {
                "id": "82",
                "text": "82",
                "correct": false
              }
            ],
            "explanation": "El doble es sumar 42 dos veces: 84."
          },
          {
            "id": "t4-m-7",
            "question": "¿Cuál es el doble de 50?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "100",
                "text": "100",
                "correct": true
              },
              {
                "id": "102",
                "text": "102",
                "correct": false
              },
              {
                "id": "52",
                "text": "52",
                "correct": false
              },
              {
                "id": "98",
                "text": "98",
                "correct": false
              }
            ],
            "explanation": "El doble es sumar 50 dos veces: 100."
          },
          {
            "id": "t4-m-8",
            "question": "¿Cuál es el doble de 125?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "250",
                "text": "250",
                "correct": true
              },
              {
                "id": "252",
                "text": "252",
                "correct": false
              },
              {
                "id": "127",
                "text": "127",
                "correct": false
              },
              {
                "id": "248",
                "text": "248",
                "correct": false
              }
            ],
            "explanation": "El doble es sumar 125 dos veces: 250."
          },
          {
            "id": "t4-m-9",
            "question": "¿Cuál es el doble de 230?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "460",
                "text": "460",
                "correct": true
              },
              {
                "id": "462",
                "text": "462",
                "correct": false
              },
              {
                "id": "232",
                "text": "232",
                "correct": false
              },
              {
                "id": "458",
                "text": "458",
                "correct": false
              }
            ],
            "explanation": "El doble es sumar 230 dos veces: 460."
          }
        ]
      },
      {
        "id": "comprueba",
        "title": "Comprueba tu progreso",
        "subtitle": "Ejercicios mezclados de los contenidos trabajados en el tema",
        "kind": "review",
        "emoji": "🏆",
        "theory": [
          {
            "type": "text",
            "title": "Repaso final",
            "text": "Aquí no hay teoría nueva. Resuelve ejercicios de los apartados que has trabajado en este tema."
          },
          {
            "type": "important",
            "title": "Objetivo",
            "text": "Comprobar que sabes aplicar los conocimientos, no memorizar nombres de secciones."
          },
          {
            "type": "tip",
            "title": "Si fallas",
            "text": "Lee la explicación, vuelve al apartado correspondiente y practica de nuevo."
          }
        ],
        "questions": [
          {
            "id": "tema-04-review-suma-multiplicacion-0",
            "question": "4 + 4 + 4 equivale a…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "3-4",
                "text": "3 × 4",
                "correct": true
              },
              {
                "id": "4-4",
                "text": "4 × 4",
                "correct": false
              },
              {
                "id": "3-4",
                "text": "3 + 4",
                "correct": false
              },
              {
                "id": "4-2",
                "text": "4 × 2",
                "correct": false
              }
            ],
            "explanation": "Hay 3 sumandos iguales a 4.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "tema-04-review-suma-multiplicacion-1",
            "question": "5 grupos de 2 son…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "10",
                "text": "10",
                "correct": true
              },
              {
                "id": "7",
                "text": "7",
                "correct": false
              },
              {
                "id": "25",
                "text": "25",
                "correct": false
              },
              {
                "id": "3",
                "text": "3",
                "correct": false
              }
            ],
            "explanation": "5 × 2 = 10.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "tema-04-review-tablas-0",
            "question": "7 × 6 = ?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "42",
                "text": "42",
                "correct": true
              },
              {
                "id": "49",
                "text": "49",
                "correct": false
              },
              {
                "id": "36",
                "text": "36",
                "correct": false
              },
              {
                "id": "13",
                "text": "13",
                "correct": false
              }
            ],
            "explanation": "7 × 6 = 42."
          },
          {
            "id": "tema-04-review-tablas-1",
            "question": "8 × 4 = ?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "32",
                "text": "32",
                "correct": true
              },
              {
                "id": "40",
                "text": "40",
                "correct": false
              },
              {
                "id": "28",
                "text": "28",
                "correct": false
              },
              {
                "id": "12",
                "text": "12",
                "correct": false
              }
            ],
            "explanation": "8 × 4 = 32."
          },
          {
            "id": "tema-04-review-doble-triple-0",
            "question": "Doble de 8",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "16",
                "text": "16",
                "correct": true
              },
              {
                "id": "10",
                "text": "10",
                "correct": false
              },
              {
                "id": "24",
                "text": "24",
                "correct": false
              },
              {
                "id": "4",
                "text": "4",
                "correct": false
              }
            ],
            "explanation": "8 × 2 = 16.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "tema-04-review-doble-triple-1",
            "question": "Triple de 8",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "24",
                "text": "24",
                "correct": true
              },
              {
                "id": "16",
                "text": "16",
                "correct": false
              },
              {
                "id": "11",
                "text": "11",
                "correct": false
              },
              {
                "id": "32",
                "text": "32",
                "correct": false
              }
            ],
            "explanation": "8 × 3 = 24.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "tema-04-review-multiplicaciones-sin-llevar-0",
            "question": "Calcula: 23 × 4",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "92",
                "text": "92",
                "correct": true
              },
              {
                "id": "102",
                "text": "102",
                "correct": false
              },
              {
                "id": "82",
                "text": "82",
                "correct": false
              },
              {
                "id": "93",
                "text": "93",
                "correct": false
              }
            ],
            "explanation": "El resultado correcto es 92. Haz la operación con orden y comprueba el resultado.",
            "hint": "Puedes hacerlo paso a paso."
          },
          {
            "id": "tema-04-review-multiplicaciones-sin-llevar-1",
            "question": "Calcula: 42 × 3",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "126",
                "text": "126",
                "correct": true
              },
              {
                "id": "136",
                "text": "136",
                "correct": false
              },
              {
                "id": "116",
                "text": "116",
                "correct": false
              },
              {
                "id": "127",
                "text": "127",
                "correct": false
              }
            ],
            "explanation": "El resultado correcto es 126. Haz la operación con orden y comprueba el resultado.",
            "hint": "Puedes hacerlo paso a paso."
          },
          {
            "id": "tema-04-review-calculo-mental-0",
            "question": "¿Cuál es el doble de 6?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "12",
                "text": "12",
                "correct": true
              },
              {
                "id": "14",
                "text": "14",
                "correct": false
              },
              {
                "id": "8",
                "text": "8",
                "correct": false
              },
              {
                "id": "10",
                "text": "10",
                "correct": false
              }
            ],
            "explanation": "El doble es sumar 6 dos veces: 12."
          },
          {
            "id": "tema-04-review-calculo-mental-1",
            "question": "¿Cuál es el doble de 8?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "16",
                "text": "16",
                "correct": true
              },
              {
                "id": "18",
                "text": "18",
                "correct": false
              },
              {
                "id": "10",
                "text": "10",
                "correct": false
              },
              {
                "id": "14",
                "text": "14",
                "correct": false
              }
            ],
            "explanation": "El doble es sumar 8 dos veces: 16."
          }
        ]
      }
    ]
  },
  {
    "id": "tema-05",
    "order": 5,
    "title": "Práctica de la multiplicación",
    "description": "Aprende la teoría, practica con muchos ejercicios y comprueba tu progreso.",
    "emoji": "🧮",
    "sections": [
      {
        "id": "multiplicaciones-llevando",
        "title": "Multiplicaciones llevando",
        "subtitle": "Multiplicar cuando aparecen llevadas",
        "kind": "calculation",
        "emoji": "✖️",
        "theory": [
          {
            "type": "text",
            "title": "Multiplicar llevando",
            "text": "Cuando el producto de una cifra es 10 o más, escribimos las unidades y llevamos las decenas al orden siguiente."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "Empieza por unidades.",
              "Anota la llevada.",
              "Súmala al producto siguiente.",
              "Revisa la colocación."
            ]
          },
          {
            "type": "example",
            "title": "Ejemplo",
            "text": "68 × 5: 5×8=40, escribimos 0 y llevamos 4; 5×6+4=34 → 340."
          },
          {
            "type": "tip",
            "title": "Truco MathCrack",
            "text": "Escribe pequeña la llevada para no olvidarla."
          }
        ],
        "questions": [
          {
            "id": "t5-ml-0",
            "question": "Calcula: 23 × 4",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "92",
                "text": "92",
                "correct": true
              },
              {
                "id": "102",
                "text": "102",
                "correct": false
              },
              {
                "id": "82",
                "text": "82",
                "correct": false
              },
              {
                "id": "93",
                "text": "93",
                "correct": false
              }
            ],
            "explanation": "El resultado correcto es 92. Haz la operación con orden y comprueba el resultado.",
            "hint": "Puedes hacerlo paso a paso."
          },
          {
            "id": "t5-ml-1",
            "question": "Calcula: 42 × 3",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "126",
                "text": "126",
                "correct": true
              },
              {
                "id": "136",
                "text": "136",
                "correct": false
              },
              {
                "id": "116",
                "text": "116",
                "correct": false
              },
              {
                "id": "127",
                "text": "127",
                "correct": false
              }
            ],
            "explanation": "El resultado correcto es 126. Haz la operación con orden y comprueba el resultado.",
            "hint": "Puedes hacerlo paso a paso."
          },
          {
            "id": "t5-ml-2",
            "question": "Calcula: 31 × 6",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "186",
                "text": "186",
                "correct": true
              },
              {
                "id": "196",
                "text": "196",
                "correct": false
              },
              {
                "id": "176",
                "text": "176",
                "correct": false
              },
              {
                "id": "187",
                "text": "187",
                "correct": false
              }
            ],
            "explanation": "El resultado correcto es 186. Haz la operación con orden y comprueba el resultado.",
            "hint": "Puedes hacerlo paso a paso."
          },
          {
            "id": "t5-ml-3",
            "question": "Calcula: 54 × 7",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "378",
                "text": "378",
                "correct": true
              },
              {
                "id": "388",
                "text": "388",
                "correct": false
              },
              {
                "id": "368",
                "text": "368",
                "correct": false
              },
              {
                "id": "379",
                "text": "379",
                "correct": false
              }
            ],
            "explanation": "El resultado correcto es 378. Haz la operación con orden y comprueba el resultado.",
            "hint": "Puedes hacerlo paso a paso."
          },
          {
            "id": "t5-ml-4",
            "question": "Calcula: 68 × 5",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "340",
                "text": "340",
                "correct": true
              },
              {
                "id": "350",
                "text": "350",
                "correct": false
              },
              {
                "id": "330",
                "text": "330",
                "correct": false
              },
              {
                "id": "341",
                "text": "341",
                "correct": false
              }
            ],
            "explanation": "El resultado correcto es 340. Haz la operación con orden y comprueba el resultado.",
            "hint": "Puedes hacerlo paso a paso."
          },
          {
            "id": "t5-ml-5",
            "question": "Calcula: 37 × 8",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "296",
                "text": "296",
                "correct": true
              },
              {
                "id": "306",
                "text": "306",
                "correct": false
              },
              {
                "id": "286",
                "text": "286",
                "correct": false
              },
              {
                "id": "297",
                "text": "297",
                "correct": false
              }
            ],
            "explanation": "El resultado correcto es 296. Haz la operación con orden y comprueba el resultado.",
            "hint": "Puedes hacerlo paso a paso."
          },
          {
            "id": "t5-ml-6",
            "question": "Calcula: 46 × 9",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "414",
                "text": "414",
                "correct": true
              },
              {
                "id": "424",
                "text": "424",
                "correct": false
              },
              {
                "id": "404",
                "text": "404",
                "correct": false
              },
              {
                "id": "415",
                "text": "415",
                "correct": false
              }
            ],
            "explanation": "El resultado correcto es 414. Haz la operación con orden y comprueba el resultado.",
            "hint": "Puedes hacerlo paso a paso."
          },
          {
            "id": "t5-ml-7",
            "question": "Calcula: 125 × 3",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "375",
                "text": "375",
                "correct": true
              },
              {
                "id": "385",
                "text": "385",
                "correct": false
              },
              {
                "id": "365",
                "text": "365",
                "correct": false
              },
              {
                "id": "376",
                "text": "376",
                "correct": false
              }
            ],
            "explanation": "El resultado correcto es 375. Haz la operación con orden y comprueba el resultado.",
            "hint": "Puedes hacerlo paso a paso."
          },
          {
            "id": "t5-ml-8",
            "question": "Calcula: 214 × 4",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "856",
                "text": "856",
                "correct": true
              },
              {
                "id": "866",
                "text": "866",
                "correct": false
              },
              {
                "id": "846",
                "text": "846",
                "correct": false
              },
              {
                "id": "857",
                "text": "857",
                "correct": false
              }
            ],
            "explanation": "El resultado correcto es 856. Haz la operación con orden y comprueba el resultado.",
            "hint": "Puedes hacerlo paso a paso."
          },
          {
            "id": "t5-ml-9",
            "question": "Calcula: 306 × 2",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "612",
                "text": "612",
                "correct": true
              },
              {
                "id": "622",
                "text": "622",
                "correct": false
              },
              {
                "id": "602",
                "text": "602",
                "correct": false
              },
              {
                "id": "613",
                "text": "613",
                "correct": false
              }
            ],
            "explanation": "El resultado correcto es 612. Haz la operación con orden y comprueba el resultado.",
            "hint": "Puedes hacerlo paso a paso."
          }
        ]
      },
      {
        "id": "estimacion-productos",
        "title": "Estimaciones de productos",
        "subtitle": "Aproximar un factor y multiplicar",
        "kind": "calculation",
        "emoji": "🎯",
        "theory": [
          {
            "type": "text",
            "title": "Estimar productos",
            "text": "Para estimar un producto, aproximamos el número de varias cifras y multiplicamos por el otro factor."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "48 × 3 ≈ 50 × 3 = 150",
              "193 × 4 ≈ 200 × 4 = 800",
              "Es un valor aproximado.",
              "Sirve para revisar el resultado exacto."
            ]
          },
          {
            "type": "example",
            "title": "Ejemplo",
            "text": "302 × 2 ≈ 300 × 2 = 600."
          },
          {
            "type": "tip",
            "title": "Truco MathCrack",
            "text": "Aproxima al orden que facilite el cálculo."
          }
        ],
        "questions": [
          {
            "id": "t5-e-0",
            "question": "48 × 3 ≈ …",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "150",
                "text": "150",
                "correct": true
              },
              {
                "id": "144",
                "text": "144",
                "correct": false
              },
              {
                "id": "120",
                "text": "120",
                "correct": false
              },
              {
                "id": "180",
                "text": "180",
                "correct": false
              }
            ],
            "explanation": "48 ≈ 50; 50 × 3 = 150.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t5-e-1",
            "question": "193 × 4 ≈ …",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "800",
                "text": "800",
                "correct": true
              },
              {
                "id": "600",
                "text": "600",
                "correct": false
              },
              {
                "id": "772",
                "text": "772",
                "correct": false
              },
              {
                "id": "1-000",
                "text": "1.000",
                "correct": false
              }
            ],
            "explanation": "193 ≈ 200; 200 × 4 = 800.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t5-e-2",
            "question": "302 × 2 ≈ …",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "600",
                "text": "600",
                "correct": true
              },
              {
                "id": "604",
                "text": "604",
                "correct": false
              },
              {
                "id": "300",
                "text": "300",
                "correct": false
              },
              {
                "id": "800",
                "text": "800",
                "correct": false
              }
            ],
            "explanation": "302 ≈ 300.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t5-e-3",
            "question": "71 × 5 ≈ …",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "350",
                "text": "350",
                "correct": true
              },
              {
                "id": "355",
                "text": "355",
                "correct": false
              },
              {
                "id": "300",
                "text": "300",
                "correct": false
              },
              {
                "id": "400",
                "text": "400",
                "correct": false
              }
            ],
            "explanation": "71 ≈ 70; 70 × 5 = 350.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t5-e-4",
            "question": "89 × 6 ≈ …",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "540",
                "text": "540",
                "correct": true
              },
              {
                "id": "534",
                "text": "534",
                "correct": false
              },
              {
                "id": "480",
                "text": "480",
                "correct": false
              },
              {
                "id": "600",
                "text": "600",
                "correct": false
              }
            ],
            "explanation": "89 ≈ 90; 90 × 6 = 540.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t5-e-5",
            "question": "208 × 3 ≈ …",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "600",
                "text": "600",
                "correct": true
              },
              {
                "id": "624",
                "text": "624",
                "correct": false
              },
              {
                "id": "900",
                "text": "900",
                "correct": false
              },
              {
                "id": "500",
                "text": "500",
                "correct": false
              }
            ],
            "explanation": "208 ≈ 200; 200 × 3 = 600.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t5-e-6",
            "question": "¿Una estimación es siempre exacta?",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "no",
                "text": "No",
                "correct": true
              },
              {
                "id": "s",
                "text": "Sí",
                "correct": false
              },
              {
                "id": "solo-en-restas",
                "text": "Solo en restas",
                "correct": false
              },
              {
                "id": "solo-si-hay-ceros",
                "text": "Solo si hay ceros",
                "correct": false
              }
            ],
            "explanation": "Es un valor cercano, no necesariamente exacto.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t5-e-7",
            "question": "¿Para qué ayuda estimar?",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "para-comprobar-si-el-producto-",
                "text": "Para comprobar si el producto exacto es razonable",
                "correct": true
              },
              {
                "id": "para-cambiar-los-factores",
                "text": "Para cambiar los factores",
                "correct": false
              },
              {
                "id": "para-no-aprender-las-tablas",
                "text": "Para no aprender las tablas",
                "correct": false
              },
              {
                "id": "para-convertir-multiplicacione",
                "text": "Para convertir multiplicaciones en restas",
                "correct": false
              }
            ],
            "explanation": "Permite detectar resultados imposibles.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          }
        ]
      },
      {
        "id": "problemas-varias-operaciones",
        "title": "Problemas de varias operaciones",
        "subtitle": "Combinar sumas, restas y multiplicaciones",
        "kind": "problems",
        "emoji": "🧠",
        "theory": [
          {
            "type": "text",
            "title": "Problemas de varios pasos",
            "text": "Organiza la información y decide el orden de las operaciones. Cada resultado intermedio debe responder a una pregunta útil."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "Lee y subraya datos.",
              "Decide el primer paso.",
              "Calcula y anota el resultado intermedio.",
              "Haz el segundo paso y responde."
            ]
          },
          {
            "type": "example",
            "title": "Ejemplo",
            "text": "3 cajas de 24 botellas y se venden 15: 3×24=72; 72−15=57."
          },
          {
            "type": "tip",
            "title": "Truco MathCrack",
            "text": "Explica con palabras qué calculas en cada paso."
          }
        ],
        "questions": [
          {
            "id": "t5-p-0",
            "question": "Hay 4 cajas con 25 lápices y se usan 18. ¿Cuántos quedan?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "82",
                "text": "82",
                "correct": true
              },
              {
                "id": "100",
                "text": "100",
                "correct": false
              },
              {
                "id": "118",
                "text": "118",
                "correct": false
              },
              {
                "id": "57",
                "text": "57",
                "correct": false
              }
            ],
            "explanation": "4 × 25 = 100; 100 − 18 = 82.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t5-p-1",
            "question": "Compran 3 paquetes de 36 folios y ya tenían 40. ¿Cuántos hay?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "148",
                "text": "148",
                "correct": true
              },
              {
                "id": "108",
                "text": "108",
                "correct": false
              },
              {
                "id": "76",
                "text": "76",
                "correct": false
              },
              {
                "id": "188",
                "text": "188",
                "correct": false
              }
            ],
            "explanation": "3 × 36 = 108; +40 = 148.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t5-p-2",
            "question": "5 autobuses llevan 42 personas cada uno. Bajan 30. ¿Cuántas quedan?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "180",
                "text": "180",
                "correct": true
              },
              {
                "id": "210",
                "text": "210",
                "correct": false
              },
              {
                "id": "72",
                "text": "72",
                "correct": false
              },
              {
                "id": "240",
                "text": "240",
                "correct": false
              }
            ],
            "explanation": "5 × 42 = 210; 210 − 30 = 180.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t5-p-3",
            "question": "Una granja tiene 6 corrales con 28 gallinas. Vende 25. ¿Cuántas quedan?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "143",
                "text": "143",
                "correct": true
              },
              {
                "id": "168",
                "text": "168",
                "correct": false
              },
              {
                "id": "193",
                "text": "193",
                "correct": false
              },
              {
                "id": "53",
                "text": "53",
                "correct": false
              }
            ],
            "explanation": "6 × 28 = 168; −25 = 143.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t5-p-4",
            "question": "Hay 8 mesas con 4 niños y llegan 7 más. ¿Cuántos niños hay?",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "39",
                "text": "39",
                "correct": true
              },
              {
                "id": "32",
                "text": "32",
                "correct": false
              },
              {
                "id": "47",
                "text": "47",
                "correct": false
              },
              {
                "id": "19",
                "text": "19",
                "correct": false
              }
            ],
            "explanation": "8 × 4 = 32; +7 = 39.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t5-p-5",
            "question": "3 entradas cuestan 12 € cada una. Pagas con 50 €. ¿Cuánto cambio recibes?",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "14",
                "text": "14 €",
                "correct": true
              },
              {
                "id": "36",
                "text": "36 €",
                "correct": false
              },
              {
                "id": "38",
                "text": "38 €",
                "correct": false
              },
              {
                "id": "26",
                "text": "26 €",
                "correct": false
              }
            ],
            "explanation": "3 × 12 = 36; 50 − 36 = 14.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t5-p-6",
            "question": "7 bolsas tienen 9 canicas cada una. Se pierden 8. ¿Cuántas quedan?",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "55",
                "text": "55",
                "correct": true
              },
              {
                "id": "63",
                "text": "63",
                "correct": false
              },
              {
                "id": "71",
                "text": "71",
                "correct": false
              },
              {
                "id": "48",
                "text": "48",
                "correct": false
              }
            ],
            "explanation": "7 × 9 = 63; −8 = 55.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t5-p-7",
            "question": "4 equipos tienen 11 jugadores. Faltan 5. ¿Cuántos asisten?",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "39",
                "text": "39",
                "correct": true
              },
              {
                "id": "44",
                "text": "44",
                "correct": false
              },
              {
                "id": "49",
                "text": "49",
                "correct": false
              },
              {
                "id": "6",
                "text": "6",
                "correct": false
              }
            ],
            "explanation": "4 × 11 = 44; −5 = 39.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          }
        ]
      },
      {
        "id": "calculadora",
        "title": "La calculadora",
        "subtitle": "Usar la calculadora para comprobar y explorar resultados",
        "kind": "calculation",
        "emoji": "🖩",
        "theory": [
          {
            "type": "text",
            "title": "La calculadora",
            "text": "La calculadora es una herramienta para calcular y comprobar, pero debemos saber qué operación introducir y valorar si el resultado tiene sentido."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "Introduce los números con atención.",
              "Elige la operación correcta.",
              "Pulsa = para obtener el resultado.",
              "Estima antes para detectar errores de tecleo."
            ]
          },
          {
            "type": "example",
            "title": "Ejemplo",
            "text": "Si esperas un resultado cercano a 300 y aparece 3.000, revisa lo que has introducido."
          },
          {
            "type": "tip",
            "title": "Truco MathCrack",
            "text": "Primero piensa; después usa la calculadora para comprobar."
          }
        ],
        "questions": [
          {
            "id": "t5-c-0",
            "question": "Para calcular 35 × 4 pulsamos…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "35-4",
                "text": "35 × 4 =",
                "correct": true
              },
              {
                "id": "35-4",
                "text": "35 + 4 =",
                "correct": false
              },
              {
                "id": "35-4",
                "text": "35 − 4 =",
                "correct": false
              },
              {
                "id": "35-4",
                "text": "35 ÷ 4 =",
                "correct": false
              }
            ],
            "explanation": "Debemos elegir la multiplicación.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t5-c-1",
            "question": "Si estimas 50 × 6, esperas un resultado cercano a…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "300",
                "text": "300",
                "correct": true
              },
              {
                "id": "30",
                "text": "30",
                "correct": false
              },
              {
                "id": "3-000",
                "text": "3.000",
                "correct": false
              },
              {
                "id": "56",
                "text": "56",
                "correct": false
              }
            ],
            "explanation": "5×6=30 y añadimos un cero.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t5-c-2",
            "question": "La calculadora sirve para…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "calcular-y-comprobar",
                "text": "calcular y comprobar",
                "correct": true
              },
              {
                "id": "evitar-comprender",
                "text": "evitar comprender",
                "correct": false
              },
              {
                "id": "elegir-sola-la-operaci-n",
                "text": "elegir sola la operación",
                "correct": false
              },
              {
                "id": "sustituir-siempre-el-razonamie",
                "text": "sustituir siempre el razonamiento",
                "correct": false
              }
            ],
            "explanation": "Es una herramienta, no decide el problema.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t5-c-3",
            "question": "Si tecleas mal un número debes…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "corregirlo-y-repetir-la-operac",
                "text": "corregirlo y repetir la operación",
                "correct": true
              },
              {
                "id": "aceptar-el-resultado",
                "text": "aceptar el resultado",
                "correct": false
              },
              {
                "id": "cambiar-el-problema",
                "text": "cambiar el problema",
                "correct": false
              },
              {
                "id": "sumar-10",
                "text": "sumar 10",
                "correct": false
              }
            ],
            "explanation": "La entrada debe ser correcta.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t5-c-4",
            "question": "25 × 8 =",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "200",
                "text": "200",
                "correct": true
              },
              {
                "id": "180",
                "text": "180",
                "correct": false
              },
              {
                "id": "225",
                "text": "225",
                "correct": false
              },
              {
                "id": "33",
                "text": "33",
                "correct": false
              }
            ],
            "explanation": "25 × 8 = 200.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t5-c-5",
            "question": "125 + 375 =",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "500",
                "text": "500",
                "correct": true
              },
              {
                "id": "400",
                "text": "400",
                "correct": false
              },
              {
                "id": "450",
                "text": "450",
                "correct": false
              },
              {
                "id": "600",
                "text": "600",
                "correct": false
              }
            ],
            "explanation": "La suma es 500.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t5-c-6",
            "question": "900 − 468 =",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "432",
                "text": "432",
                "correct": true
              },
              {
                "id": "532",
                "text": "532",
                "correct": false
              },
              {
                "id": "442",
                "text": "442",
                "correct": false
              },
              {
                "id": "368",
                "text": "368",
                "correct": false
              }
            ],
            "explanation": "900 − 468 = 432.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t5-c-7",
            "question": "¿Conviene estimar antes de usar la calculadora?",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "s",
                "text": "Sí",
                "correct": true
              },
              {
                "id": "no",
                "text": "No",
                "correct": false
              },
              {
                "id": "solo-en-geometr-a",
                "text": "Solo en geometría",
                "correct": false
              },
              {
                "id": "nunca",
                "text": "Nunca",
                "correct": false
              }
            ],
            "explanation": "Ayuda a detectar errores.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          }
        ]
      },
      {
        "id": "comprueba",
        "title": "Comprueba tu progreso",
        "subtitle": "Ejercicios mezclados de los contenidos trabajados en el tema",
        "kind": "review",
        "emoji": "🏆",
        "theory": [
          {
            "type": "text",
            "title": "Repaso final",
            "text": "Aquí no hay teoría nueva. Resuelve ejercicios de los apartados que has trabajado en este tema."
          },
          {
            "type": "important",
            "title": "Objetivo",
            "text": "Comprobar que sabes aplicar los conocimientos, no memorizar nombres de secciones."
          },
          {
            "type": "tip",
            "title": "Si fallas",
            "text": "Lee la explicación, vuelve al apartado correspondiente y practica de nuevo."
          }
        ],
        "questions": [
          {
            "id": "tema-05-review-multiplicaciones-llevando-0",
            "question": "Calcula: 23 × 4",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "92",
                "text": "92",
                "correct": true
              },
              {
                "id": "102",
                "text": "102",
                "correct": false
              },
              {
                "id": "82",
                "text": "82",
                "correct": false
              },
              {
                "id": "93",
                "text": "93",
                "correct": false
              }
            ],
            "explanation": "El resultado correcto es 92. Haz la operación con orden y comprueba el resultado.",
            "hint": "Puedes hacerlo paso a paso."
          },
          {
            "id": "tema-05-review-multiplicaciones-llevando-1",
            "question": "Calcula: 42 × 3",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "126",
                "text": "126",
                "correct": true
              },
              {
                "id": "136",
                "text": "136",
                "correct": false
              },
              {
                "id": "116",
                "text": "116",
                "correct": false
              },
              {
                "id": "127",
                "text": "127",
                "correct": false
              }
            ],
            "explanation": "El resultado correcto es 126. Haz la operación con orden y comprueba el resultado.",
            "hint": "Puedes hacerlo paso a paso."
          },
          {
            "id": "tema-05-review-estimacion-productos-0",
            "question": "48 × 3 ≈ …",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "150",
                "text": "150",
                "correct": true
              },
              {
                "id": "144",
                "text": "144",
                "correct": false
              },
              {
                "id": "120",
                "text": "120",
                "correct": false
              },
              {
                "id": "180",
                "text": "180",
                "correct": false
              }
            ],
            "explanation": "48 ≈ 50; 50 × 3 = 150.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "tema-05-review-estimacion-productos-1",
            "question": "193 × 4 ≈ …",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "800",
                "text": "800",
                "correct": true
              },
              {
                "id": "600",
                "text": "600",
                "correct": false
              },
              {
                "id": "772",
                "text": "772",
                "correct": false
              },
              {
                "id": "1-000",
                "text": "1.000",
                "correct": false
              }
            ],
            "explanation": "193 ≈ 200; 200 × 4 = 800.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "tema-05-review-problemas-varias-operaciones-0",
            "question": "Hay 4 cajas con 25 lápices y se usan 18. ¿Cuántos quedan?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "82",
                "text": "82",
                "correct": true
              },
              {
                "id": "100",
                "text": "100",
                "correct": false
              },
              {
                "id": "118",
                "text": "118",
                "correct": false
              },
              {
                "id": "57",
                "text": "57",
                "correct": false
              }
            ],
            "explanation": "4 × 25 = 100; 100 − 18 = 82.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "tema-05-review-problemas-varias-operaciones-1",
            "question": "Compran 3 paquetes de 36 folios y ya tenían 40. ¿Cuántos hay?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "148",
                "text": "148",
                "correct": true
              },
              {
                "id": "108",
                "text": "108",
                "correct": false
              },
              {
                "id": "76",
                "text": "76",
                "correct": false
              },
              {
                "id": "188",
                "text": "188",
                "correct": false
              }
            ],
            "explanation": "3 × 36 = 108; +40 = 148.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "tema-05-review-calculadora-0",
            "question": "Para calcular 35 × 4 pulsamos…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "35-4",
                "text": "35 × 4 =",
                "correct": true
              },
              {
                "id": "35-4",
                "text": "35 + 4 =",
                "correct": false
              },
              {
                "id": "35-4",
                "text": "35 − 4 =",
                "correct": false
              },
              {
                "id": "35-4",
                "text": "35 ÷ 4 =",
                "correct": false
              }
            ],
            "explanation": "Debemos elegir la multiplicación.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "tema-05-review-calculadora-1",
            "question": "Si estimas 50 × 6, esperas un resultado cercano a…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "300",
                "text": "300",
                "correct": true
              },
              {
                "id": "30",
                "text": "30",
                "correct": false
              },
              {
                "id": "3-000",
                "text": "3.000",
                "correct": false
              },
              {
                "id": "56",
                "text": "56",
                "correct": false
              }
            ],
            "explanation": "5×6=30 y añadimos un cero.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          }
        ]
      }
    ]
  },
  {
    "id": "tema-06",
    "order": 6,
    "title": "La división",
    "description": "Aprende la teoría, practica con muchos ejercicios y comprueba tu progreso.",
    "emoji": "➗",
    "sections": [
      {
        "id": "repartos",
        "title": "Repartos y división",
        "subtitle": "Relacionar repartir en partes iguales con dividir",
        "kind": "calculation",
        "emoji": "➗",
        "theory": [
          {
            "type": "text",
            "title": "Dividir es repartir",
            "text": "La división permite repartir una cantidad en grupos iguales o averiguar cuántos grupos iguales se pueden formar."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "Dividendo: cantidad que repartimos.",
              "Divisor: número de grupos o tamaño del grupo.",
              "Cociente: resultado.",
              "Resto: lo que sobra."
            ]
          },
          {
            "type": "example",
            "title": "Ejemplo",
            "text": "12 caramelos entre 3 niños: 12 ÷ 3 = 4."
          },
          {
            "type": "tip",
            "title": "Truco MathCrack",
            "text": "Comprueba multiplicando cociente × divisor."
          }
        ],
        "questions": [
          {
            "id": "t6-d-0",
            "question": "Calcula: 84 ÷ 4",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "21",
                "text": "21",
                "correct": true
              },
              {
                "id": "31",
                "text": "31",
                "correct": false
              },
              {
                "id": "11",
                "text": "11",
                "correct": false
              },
              {
                "id": "22",
                "text": "22",
                "correct": false
              }
            ],
            "explanation": "El resultado correcto es 21. Haz la operación con orden y comprueba el resultado.",
            "hint": "Puedes hacerlo paso a paso."
          },
          {
            "id": "t6-d-1",
            "question": "Calcula: 96 ÷ 3",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "32",
                "text": "32",
                "correct": true
              },
              {
                "id": "42",
                "text": "42",
                "correct": false
              },
              {
                "id": "22",
                "text": "22",
                "correct": false
              },
              {
                "id": "33",
                "text": "33",
                "correct": false
              }
            ],
            "explanation": "El resultado correcto es 32. Haz la operación con orden y comprueba el resultado.",
            "hint": "Puedes hacerlo paso a paso."
          },
          {
            "id": "t6-d-2",
            "question": "Calcula: 75 ÷ 5",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "15",
                "text": "15",
                "correct": true
              },
              {
                "id": "25",
                "text": "25",
                "correct": false
              },
              {
                "id": "5",
                "text": "5",
                "correct": false
              },
              {
                "id": "16",
                "text": "16",
                "correct": false
              }
            ],
            "explanation": "El resultado correcto es 15. Haz la operación con orden y comprueba el resultado.",
            "hint": "Puedes hacerlo paso a paso."
          },
          {
            "id": "t6-d-3",
            "question": "Calcula: 72 ÷ 8",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "9",
                "text": "9",
                "correct": true
              },
              {
                "id": "10",
                "text": "10",
                "correct": false
              },
              {
                "id": "11",
                "text": "11",
                "correct": false
              },
              {
                "id": "8",
                "text": "8",
                "correct": false
              }
            ],
            "explanation": "El resultado correcto es 9. Haz la operación con orden y comprueba el resultado.",
            "hint": "Puedes hacerlo paso a paso."
          },
          {
            "id": "t6-d-4",
            "question": "Calcula: 63 ÷ 7",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "9",
                "text": "9",
                "correct": true
              },
              {
                "id": "10",
                "text": "10",
                "correct": false
              },
              {
                "id": "11",
                "text": "11",
                "correct": false
              },
              {
                "id": "8",
                "text": "8",
                "correct": false
              }
            ],
            "explanation": "El resultado correcto es 9. Haz la operación con orden y comprueba el resultado.",
            "hint": "Puedes hacerlo paso a paso."
          },
          {
            "id": "t6-d-5",
            "question": "Calcula: 144 ÷ 6",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "24",
                "text": "24",
                "correct": true
              },
              {
                "id": "34",
                "text": "34",
                "correct": false
              },
              {
                "id": "14",
                "text": "14",
                "correct": false
              },
              {
                "id": "25",
                "text": "25",
                "correct": false
              }
            ],
            "explanation": "El resultado correcto es 24. Haz la operación con orden y comprueba el resultado.",
            "hint": "Puedes hacerlo paso a paso."
          },
          {
            "id": "t6-d-6",
            "question": "Calcula: 132 ÷ 4",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "33",
                "text": "33",
                "correct": true
              },
              {
                "id": "43",
                "text": "43",
                "correct": false
              },
              {
                "id": "23",
                "text": "23",
                "correct": false
              },
              {
                "id": "34",
                "text": "34",
                "correct": false
              }
            ],
            "explanation": "El resultado correcto es 33. Haz la operación con orden y comprueba el resultado.",
            "hint": "Puedes hacerlo paso a paso."
          },
          {
            "id": "t6-d-7",
            "question": "Calcula: 155 ÷ 5",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "31",
                "text": "31",
                "correct": true
              },
              {
                "id": "41",
                "text": "41",
                "correct": false
              },
              {
                "id": "21",
                "text": "21",
                "correct": false
              },
              {
                "id": "32",
                "text": "32",
                "correct": false
              }
            ],
            "explanation": "El resultado correcto es 31. Haz la operación con orden y comprueba el resultado.",
            "hint": "Puedes hacerlo paso a paso."
          },
          {
            "id": "t6-d-8",
            "question": "Calcula: 248 ÷ 8",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "31",
                "text": "31",
                "correct": true
              },
              {
                "id": "41",
                "text": "41",
                "correct": false
              },
              {
                "id": "21",
                "text": "21",
                "correct": false
              },
              {
                "id": "32",
                "text": "32",
                "correct": false
              }
            ],
            "explanation": "El resultado correcto es 31. Haz la operación con orden y comprueba el resultado.",
            "hint": "Puedes hacerlo paso a paso."
          },
          {
            "id": "t6-d-9",
            "question": "Calcula: 369 ÷ 9",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "41",
                "text": "41",
                "correct": true
              },
              {
                "id": "51",
                "text": "51",
                "correct": false
              },
              {
                "id": "31",
                "text": "31",
                "correct": false
              },
              {
                "id": "42",
                "text": "42",
                "correct": false
              }
            ],
            "explanation": "El resultado correcto es 41. Haz la operación con orden y comprueba el resultado.",
            "hint": "Puedes hacerlo paso a paso."
          }
        ]
      },
      {
        "id": "prueba-division",
        "title": "Prueba de la división",
        "subtitle": "Comprobar una división",
        "kind": "calculation",
        "emoji": "✅",
        "theory": [
          {
            "type": "text",
            "title": "Comprobar divisiones",
            "text": "En una división exacta: divisor × cociente = dividendo. Si hay resto: divisor × cociente + resto = dividendo."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "El resto siempre es menor que el divisor.",
              "Exacta: resto 0.",
              "Entera: resto distinto de 0.",
              "Usa la multiplicación para comprobar."
            ]
          },
          {
            "type": "example",
            "title": "Ejemplo",
            "text": "17 ÷ 5 = 3 y resto 2: 5 × 3 + 2 = 17."
          },
          {
            "type": "tip",
            "title": "Truco MathCrack",
            "text": "Si la comprobación no da el dividendo, revisa."
          }
        ],
        "questions": [
          {
            "id": "t6-pr-0",
            "question": "24 ÷ 6 = 4. La prueba es…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "6-4-24",
                "text": "6 × 4 = 24",
                "correct": true
              },
              {
                "id": "24-6-4",
                "text": "24 × 6 = 4",
                "correct": false
              },
              {
                "id": "24-6-4",
                "text": "24 − 6 = 4",
                "correct": false
              },
              {
                "id": "4-6-24",
                "text": "4 + 6 = 24",
                "correct": false
              }
            ],
            "explanation": "Divisor × cociente = dividendo.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t6-pr-1",
            "question": "17 ÷ 5 = 3, resto 2. La prueba es…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "5-3-2-17",
                "text": "5 × 3 + 2 = 17",
                "correct": true
              },
              {
                "id": "5-3-2-17",
                "text": "5 + 3 + 2 = 17",
                "correct": false
              },
              {
                "id": "17-5-3",
                "text": "17 − 5 = 3",
                "correct": false
              },
              {
                "id": "3-2-17",
                "text": "3 × 2 = 17",
                "correct": false
              }
            ],
            "explanation": "Multiplicamos y sumamos el resto.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t6-pr-2",
            "question": "El resto debe ser…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "menor-que-el-divisor",
                "text": "menor que el divisor",
                "correct": true
              },
              {
                "id": "mayor-que-el-divisor",
                "text": "mayor que el divisor",
                "correct": false
              },
              {
                "id": "igual-siempre-a-0",
                "text": "igual siempre a 0",
                "correct": false
              },
              {
                "id": "mayor-que-el-dividendo",
                "text": "mayor que el dividendo",
                "correct": false
              }
            ],
            "explanation": "Si fuera igual o mayor podríamos seguir repartiendo.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t6-pr-3",
            "question": "En una división exacta el resto es…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "0",
                "text": "0",
                "correct": true
              },
              {
                "id": "1",
                "text": "1",
                "correct": false
              },
              {
                "id": "el-divisor",
                "text": "el divisor",
                "correct": false
              },
              {
                "id": "el-cociente",
                "text": "el cociente",
                "correct": false
              }
            ],
            "explanation": "No sobra nada.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t6-pr-4",
            "question": "35 ÷ 5 = 7. ¿Es exacta?",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "s",
                "text": "Sí",
                "correct": true
              },
              {
                "id": "no",
                "text": "No",
                "correct": false
              },
              {
                "id": "solo-si-sobra-5",
                "text": "Solo si sobra 5",
                "correct": false
              },
              {
                "id": "no-se-puede-saber",
                "text": "No se puede saber",
                "correct": false
              }
            ],
            "explanation": "5×7=35, resto 0.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t6-pr-5",
            "question": "20 ÷ 6 da cociente 3 y resto…",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "2",
                "text": "2",
                "correct": true
              },
              {
                "id": "0",
                "text": "0",
                "correct": false
              },
              {
                "id": "3",
                "text": "3",
                "correct": false
              },
              {
                "id": "6",
                "text": "6",
                "correct": false
              }
            ],
            "explanation": "6×3=18; sobran 2.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t6-pr-6",
            "question": "¿Puede una división entre 4 tener resto 5?",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "no",
                "text": "No",
                "correct": true
              },
              {
                "id": "s",
                "text": "Sí",
                "correct": false
              },
              {
                "id": "siempre",
                "text": "Siempre",
                "correct": false
              },
              {
                "id": "solo-si-es-exacta",
                "text": "Solo si es exacta",
                "correct": false
              }
            ],
            "explanation": "El resto debe ser menor que 4.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t6-pr-7",
            "question": "43 = 7 × 6 + …",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "1",
                "text": "1",
                "correct": true
              },
              {
                "id": "6",
                "text": "6",
                "correct": false
              },
              {
                "id": "7",
                "text": "7",
                "correct": false
              },
              {
                "id": "0",
                "text": "0",
                "correct": false
              }
            ],
            "explanation": "7×6=42; falta 1.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          }
        ]
      },
      {
        "id": "mitad-tercio-cuarto",
        "title": "Mitad, tercio y cuarto",
        "subtitle": "Dividir una cantidad en 2, 3 o 4 partes iguales",
        "kind": "calculation",
        "emoji": "½",
        "theory": [
          {
            "type": "text",
            "title": "Partes iguales",
            "text": "La mitad se obtiene dividiendo entre 2; el tercio, entre 3; y el cuarto, entre 4."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "Mitad de 20 = 10",
              "Tercio de 18 = 6",
              "Cuarto de 24 = 6",
              "Comprueba multiplicando."
            ]
          },
          {
            "type": "example",
            "title": "Ejemplo",
            "text": "Cuarto de 36 = 36 ÷ 4 = 9."
          },
          {
            "type": "tip",
            "title": "Truco MathCrack",
            "text": "Relaciona estas palabras con ÷2, ÷3 y ÷4."
          }
        ],
        "questions": [
          {
            "id": "t6-mtc-0",
            "question": "Mitad de 18",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "9",
                "text": "9",
                "correct": true
              },
              {
                "id": "6",
                "text": "6",
                "correct": false
              },
              {
                "id": "12",
                "text": "12",
                "correct": false
              },
              {
                "id": "36",
                "text": "36",
                "correct": false
              }
            ],
            "explanation": "18 ÷ 2 = 9.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t6-mtc-1",
            "question": "Tercio de 21",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "7",
                "text": "7",
                "correct": true
              },
              {
                "id": "3",
                "text": "3",
                "correct": false
              },
              {
                "id": "9",
                "text": "9",
                "correct": false
              },
              {
                "id": "6",
                "text": "6",
                "correct": false
              }
            ],
            "explanation": "21 ÷ 3 = 7.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t6-mtc-2",
            "question": "Cuarto de 28",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "7",
                "text": "7",
                "correct": true
              },
              {
                "id": "14",
                "text": "14",
                "correct": false
              },
              {
                "id": "4",
                "text": "4",
                "correct": false
              },
              {
                "id": "8",
                "text": "8",
                "correct": false
              }
            ],
            "explanation": "28 ÷ 4 = 7.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t6-mtc-3",
            "question": "Mitad de 50",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "25",
                "text": "25",
                "correct": true
              },
              {
                "id": "20",
                "text": "20",
                "correct": false
              },
              {
                "id": "100",
                "text": "100",
                "correct": false
              },
              {
                "id": "15",
                "text": "15",
                "correct": false
              }
            ],
            "explanation": "50 ÷ 2 = 25.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t6-mtc-4",
            "question": "Tercio de 30",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "10",
                "text": "10",
                "correct": true
              },
              {
                "id": "15",
                "text": "15",
                "correct": false
              },
              {
                "id": "9",
                "text": "9",
                "correct": false
              },
              {
                "id": "27",
                "text": "27",
                "correct": false
              }
            ],
            "explanation": "30 ÷ 3 = 10.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t6-mtc-5",
            "question": "Cuarto de 40",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "10",
                "text": "10",
                "correct": true
              },
              {
                "id": "20",
                "text": "20",
                "correct": false
              },
              {
                "id": "8",
                "text": "8",
                "correct": false
              },
              {
                "id": "16",
                "text": "16",
                "correct": false
              }
            ],
            "explanation": "40 ÷ 4 = 10.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t6-mtc-6",
            "question": "Si la mitad es 12, el total es…",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "24",
                "text": "24",
                "correct": true
              },
              {
                "id": "6",
                "text": "6",
                "correct": false
              },
              {
                "id": "14",
                "text": "14",
                "correct": false
              },
              {
                "id": "36",
                "text": "36",
                "correct": false
              }
            ],
            "explanation": "12 × 2 = 24.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t6-mtc-7",
            "question": "Si un tercio es 8, el total es…",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "24",
                "text": "24",
                "correct": true
              },
              {
                "id": "16",
                "text": "16",
                "correct": false
              },
              {
                "id": "11",
                "text": "11",
                "correct": false
              },
              {
                "id": "32",
                "text": "32",
                "correct": false
              }
            ],
            "explanation": "8 × 3 = 24.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          }
        ]
      },
      {
        "id": "exacta-entera",
        "title": "División exacta y división entera",
        "subtitle": "Distinguir divisiones según su resto",
        "kind": "calculation",
        "emoji": "🔍",
        "theory": [
          {
            "type": "text",
            "title": "Exacta o entera",
            "text": "Una división es exacta si su resto es 0. Es entera cuando el resto es distinto de 0."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "18 ÷ 3 = 6, exacta.",
              "20 ÷ 3 = 6, resto 2, entera.",
              "El resto es menor que el divisor.",
              "La prueba permite comprobar ambas."
            ]
          },
          {
            "type": "example",
            "title": "Ejemplo",
            "text": "25 ÷ 5 es exacta; 25 ÷ 4 es entera."
          },
          {
            "type": "tip",
            "title": "Truco MathCrack",
            "text": "Mira el resto: es la pista definitiva."
          }
        ],
        "questions": [
          {
            "id": "t6-ee-0",
            "question": "18 ÷ 3 es…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "exacta",
                "text": "exacta",
                "correct": true
              },
              {
                "id": "entera",
                "text": "entera",
                "correct": false
              },
              {
                "id": "imposible",
                "text": "imposible",
                "correct": false
              },
              {
                "id": "una-suma",
                "text": "una suma",
                "correct": false
              }
            ],
            "explanation": "El resto es 0.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t6-ee-1",
            "question": "20 ÷ 3 es…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "entera",
                "text": "entera",
                "correct": true
              },
              {
                "id": "exacta",
                "text": "exacta",
                "correct": false
              },
              {
                "id": "multiplicaci-n",
                "text": "multiplicación",
                "correct": false
              },
              {
                "id": "resta",
                "text": "resta",
                "correct": false
              }
            ],
            "explanation": "Sobran 2.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t6-ee-2",
            "question": "32 ÷ 8 es…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "exacta",
                "text": "exacta",
                "correct": true
              },
              {
                "id": "entera",
                "text": "entera",
                "correct": false
              },
              {
                "id": "aproximada",
                "text": "aproximada",
                "correct": false
              },
              {
                "id": "sin-cociente",
                "text": "sin cociente",
                "correct": false
              }
            ],
            "explanation": "32 = 8×4.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t6-ee-3",
            "question": "31 ÷ 5 es…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "entera",
                "text": "entera",
                "correct": true
              },
              {
                "id": "exacta",
                "text": "exacta",
                "correct": false
              },
              {
                "id": "sin-resto",
                "text": "sin resto",
                "correct": false
              },
              {
                "id": "igual-a-5",
                "text": "igual a 5",
                "correct": false
              }
            ],
            "explanation": "5×6=30 y sobra 1.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t6-ee-4",
            "question": "En una división exacta…",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "no-sobra-nada",
                "text": "no sobra nada",
                "correct": true
              },
              {
                "id": "siempre-sobra-1",
                "text": "siempre sobra 1",
                "correct": false
              },
              {
                "id": "el-resto-es-mayor",
                "text": "el resto es mayor",
                "correct": false
              },
              {
                "id": "no-hay-cociente",
                "text": "no hay cociente",
                "correct": false
              }
            ],
            "explanation": "Resto 0.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t6-ee-5",
            "question": "27 ÷ 4 tiene resto…",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "3",
                "text": "3",
                "correct": true
              },
              {
                "id": "0",
                "text": "0",
                "correct": false
              },
              {
                "id": "4",
                "text": "4",
                "correct": false
              },
              {
                "id": "7",
                "text": "7",
                "correct": false
              }
            ],
            "explanation": "4×6=24; sobran 3.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t6-ee-6",
            "question": "45 ÷ 9 tiene resto…",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "0",
                "text": "0",
                "correct": true
              },
              {
                "id": "5",
                "text": "5",
                "correct": false
              },
              {
                "id": "9",
                "text": "9",
                "correct": false
              },
              {
                "id": "1",
                "text": "1",
                "correct": false
              }
            ],
            "explanation": "45=9×5.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t6-ee-7",
            "question": "¿Cuál es exacta?",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "42-7",
                "text": "42 ÷ 7",
                "correct": true
              },
              {
                "id": "43-7",
                "text": "43 ÷ 7",
                "correct": false
              },
              {
                "id": "25-4",
                "text": "25 ÷ 4",
                "correct": false
              },
              {
                "id": "19-3",
                "text": "19 ÷ 3",
                "correct": false
              }
            ],
            "explanation": "42=7×6.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          }
        ]
      },
      {
        "id": "comprueba",
        "title": "Comprueba tu progreso",
        "subtitle": "Ejercicios mezclados de los contenidos trabajados en el tema",
        "kind": "review",
        "emoji": "🏆",
        "theory": [
          {
            "type": "text",
            "title": "Repaso final",
            "text": "Aquí no hay teoría nueva. Resuelve ejercicios de los apartados que has trabajado en este tema."
          },
          {
            "type": "important",
            "title": "Objetivo",
            "text": "Comprobar que sabes aplicar los conocimientos, no memorizar nombres de secciones."
          },
          {
            "type": "tip",
            "title": "Si fallas",
            "text": "Lee la explicación, vuelve al apartado correspondiente y practica de nuevo."
          }
        ],
        "questions": [
          {
            "id": "tema-06-review-repartos-0",
            "question": "Calcula: 84 ÷ 4",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "21",
                "text": "21",
                "correct": true
              },
              {
                "id": "31",
                "text": "31",
                "correct": false
              },
              {
                "id": "11",
                "text": "11",
                "correct": false
              },
              {
                "id": "22",
                "text": "22",
                "correct": false
              }
            ],
            "explanation": "El resultado correcto es 21. Haz la operación con orden y comprueba el resultado.",
            "hint": "Puedes hacerlo paso a paso."
          },
          {
            "id": "tema-06-review-repartos-1",
            "question": "Calcula: 96 ÷ 3",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "32",
                "text": "32",
                "correct": true
              },
              {
                "id": "42",
                "text": "42",
                "correct": false
              },
              {
                "id": "22",
                "text": "22",
                "correct": false
              },
              {
                "id": "33",
                "text": "33",
                "correct": false
              }
            ],
            "explanation": "El resultado correcto es 32. Haz la operación con orden y comprueba el resultado.",
            "hint": "Puedes hacerlo paso a paso."
          },
          {
            "id": "tema-06-review-prueba-division-0",
            "question": "24 ÷ 6 = 4. La prueba es…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "6-4-24",
                "text": "6 × 4 = 24",
                "correct": true
              },
              {
                "id": "24-6-4",
                "text": "24 × 6 = 4",
                "correct": false
              },
              {
                "id": "24-6-4",
                "text": "24 − 6 = 4",
                "correct": false
              },
              {
                "id": "4-6-24",
                "text": "4 + 6 = 24",
                "correct": false
              }
            ],
            "explanation": "Divisor × cociente = dividendo.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "tema-06-review-prueba-division-1",
            "question": "17 ÷ 5 = 3, resto 2. La prueba es…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "5-3-2-17",
                "text": "5 × 3 + 2 = 17",
                "correct": true
              },
              {
                "id": "5-3-2-17",
                "text": "5 + 3 + 2 = 17",
                "correct": false
              },
              {
                "id": "17-5-3",
                "text": "17 − 5 = 3",
                "correct": false
              },
              {
                "id": "3-2-17",
                "text": "3 × 2 = 17",
                "correct": false
              }
            ],
            "explanation": "Multiplicamos y sumamos el resto.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "tema-06-review-mitad-tercio-cuarto-0",
            "question": "Mitad de 18",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "9",
                "text": "9",
                "correct": true
              },
              {
                "id": "6",
                "text": "6",
                "correct": false
              },
              {
                "id": "12",
                "text": "12",
                "correct": false
              },
              {
                "id": "36",
                "text": "36",
                "correct": false
              }
            ],
            "explanation": "18 ÷ 2 = 9.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "tema-06-review-mitad-tercio-cuarto-1",
            "question": "Tercio de 21",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "7",
                "text": "7",
                "correct": true
              },
              {
                "id": "3",
                "text": "3",
                "correct": false
              },
              {
                "id": "9",
                "text": "9",
                "correct": false
              },
              {
                "id": "6",
                "text": "6",
                "correct": false
              }
            ],
            "explanation": "21 ÷ 3 = 7.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "tema-06-review-exacta-entera-0",
            "question": "18 ÷ 3 es…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "exacta",
                "text": "exacta",
                "correct": true
              },
              {
                "id": "entera",
                "text": "entera",
                "correct": false
              },
              {
                "id": "imposible",
                "text": "imposible",
                "correct": false
              },
              {
                "id": "una-suma",
                "text": "una suma",
                "correct": false
              }
            ],
            "explanation": "El resto es 0.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "tema-06-review-exacta-entera-1",
            "question": "20 ÷ 3 es…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "entera",
                "text": "entera",
                "correct": true
              },
              {
                "id": "exacta",
                "text": "exacta",
                "correct": false
              },
              {
                "id": "multiplicaci-n",
                "text": "multiplicación",
                "correct": false
              },
              {
                "id": "resta",
                "text": "resta",
                "correct": false
              }
            ],
            "explanation": "Sobran 2.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          }
        ]
      }
    ]
  },
  {
    "id": "tema-07",
    "order": 7,
    "title": "Práctica de la división",
    "description": "Aprende la teoría, practica con muchos ejercicios y comprueba tu progreso.",
    "emoji": "🧠",
    "sections": [
      {
        "id": "divisor-una-cifra",
        "title": "División con divisor de una cifra",
        "subtitle": "Aplicar el algoritmo de la división",
        "kind": "calculation",
        "emoji": "➗",
        "theory": [
          {
            "type": "text",
            "title": "Dividir paso a paso",
            "text": "Cuando el dividendo tiene varias cifras, tomamos cifras de izquierda a derecha, calculamos cada cifra del cociente y continuamos con el resto."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "Empieza por la izquierda.",
              "Busca cuántas veces cabe el divisor.",
              "Multiplica y resta.",
              "Baja la cifra siguiente."
            ]
          },
          {
            "type": "example",
            "title": "Ejemplo",
            "text": "248 ÷ 8 = 31."
          },
          {
            "type": "tip",
            "title": "Truco MathCrack",
            "text": "En cada paso, el resto debe quedar menor que el divisor."
          }
        ],
        "questions": [
          {
            "id": "t7-d-0",
            "question": "Calcula: 84 ÷ 4",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "21",
                "text": "21",
                "correct": true
              },
              {
                "id": "31",
                "text": "31",
                "correct": false
              },
              {
                "id": "11",
                "text": "11",
                "correct": false
              },
              {
                "id": "22",
                "text": "22",
                "correct": false
              }
            ],
            "explanation": "El resultado correcto es 21. Haz la operación con orden y comprueba el resultado.",
            "hint": "Puedes hacerlo paso a paso."
          },
          {
            "id": "t7-d-1",
            "question": "Calcula: 96 ÷ 3",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "32",
                "text": "32",
                "correct": true
              },
              {
                "id": "42",
                "text": "42",
                "correct": false
              },
              {
                "id": "22",
                "text": "22",
                "correct": false
              },
              {
                "id": "33",
                "text": "33",
                "correct": false
              }
            ],
            "explanation": "El resultado correcto es 32. Haz la operación con orden y comprueba el resultado.",
            "hint": "Puedes hacerlo paso a paso."
          },
          {
            "id": "t7-d-2",
            "question": "Calcula: 75 ÷ 5",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "15",
                "text": "15",
                "correct": true
              },
              {
                "id": "25",
                "text": "25",
                "correct": false
              },
              {
                "id": "5",
                "text": "5",
                "correct": false
              },
              {
                "id": "16",
                "text": "16",
                "correct": false
              }
            ],
            "explanation": "El resultado correcto es 15. Haz la operación con orden y comprueba el resultado.",
            "hint": "Puedes hacerlo paso a paso."
          },
          {
            "id": "t7-d-3",
            "question": "Calcula: 72 ÷ 8",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "9",
                "text": "9",
                "correct": true
              },
              {
                "id": "10",
                "text": "10",
                "correct": false
              },
              {
                "id": "11",
                "text": "11",
                "correct": false
              },
              {
                "id": "8",
                "text": "8",
                "correct": false
              }
            ],
            "explanation": "El resultado correcto es 9. Haz la operación con orden y comprueba el resultado.",
            "hint": "Puedes hacerlo paso a paso."
          },
          {
            "id": "t7-d-4",
            "question": "Calcula: 63 ÷ 7",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "9",
                "text": "9",
                "correct": true
              },
              {
                "id": "10",
                "text": "10",
                "correct": false
              },
              {
                "id": "11",
                "text": "11",
                "correct": false
              },
              {
                "id": "8",
                "text": "8",
                "correct": false
              }
            ],
            "explanation": "El resultado correcto es 9. Haz la operación con orden y comprueba el resultado.",
            "hint": "Puedes hacerlo paso a paso."
          },
          {
            "id": "t7-d-5",
            "question": "Calcula: 144 ÷ 6",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "24",
                "text": "24",
                "correct": true
              },
              {
                "id": "34",
                "text": "34",
                "correct": false
              },
              {
                "id": "14",
                "text": "14",
                "correct": false
              },
              {
                "id": "25",
                "text": "25",
                "correct": false
              }
            ],
            "explanation": "El resultado correcto es 24. Haz la operación con orden y comprueba el resultado.",
            "hint": "Puedes hacerlo paso a paso."
          },
          {
            "id": "t7-d-6",
            "question": "Calcula: 132 ÷ 4",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "33",
                "text": "33",
                "correct": true
              },
              {
                "id": "43",
                "text": "43",
                "correct": false
              },
              {
                "id": "23",
                "text": "23",
                "correct": false
              },
              {
                "id": "34",
                "text": "34",
                "correct": false
              }
            ],
            "explanation": "El resultado correcto es 33. Haz la operación con orden y comprueba el resultado.",
            "hint": "Puedes hacerlo paso a paso."
          },
          {
            "id": "t7-d-7",
            "question": "Calcula: 155 ÷ 5",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "31",
                "text": "31",
                "correct": true
              },
              {
                "id": "41",
                "text": "41",
                "correct": false
              },
              {
                "id": "21",
                "text": "21",
                "correct": false
              },
              {
                "id": "32",
                "text": "32",
                "correct": false
              }
            ],
            "explanation": "El resultado correcto es 31. Haz la operación con orden y comprueba el resultado.",
            "hint": "Puedes hacerlo paso a paso."
          },
          {
            "id": "t7-d-8",
            "question": "Calcula: 248 ÷ 8",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "31",
                "text": "31",
                "correct": true
              },
              {
                "id": "41",
                "text": "41",
                "correct": false
              },
              {
                "id": "21",
                "text": "21",
                "correct": false
              },
              {
                "id": "32",
                "text": "32",
                "correct": false
              }
            ],
            "explanation": "El resultado correcto es 31. Haz la operación con orden y comprueba el resultado.",
            "hint": "Puedes hacerlo paso a paso."
          },
          {
            "id": "t7-d-9",
            "question": "Calcula: 369 ÷ 9",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "41",
                "text": "41",
                "correct": true
              },
              {
                "id": "51",
                "text": "51",
                "correct": false
              },
              {
                "id": "31",
                "text": "31",
                "correct": false
              },
              {
                "id": "42",
                "text": "42",
                "correct": false
              }
            ],
            "explanation": "El resultado correcto es 41. Haz la operación con orden y comprueba el resultado.",
            "hint": "Puedes hacerlo paso a paso."
          }
        ]
      },
      {
        "id": "ceros-cociente",
        "title": "Divisiones con ceros en el cociente",
        "subtitle": "No olvidar el cero cuando el divisor no cabe",
        "kind": "calculation",
        "emoji": "0️⃣",
        "theory": [
          {
            "type": "text",
            "title": "Cero en el cociente",
            "text": "Si al bajar una cifra el número obtenido es menor que el divisor y aún quedan cifras por bajar, escribimos 0 en el cociente."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "El cero mantiene la posición.",
              "No podemos saltarnos una cifra del dividendo.",
              "Continúa bajando la siguiente cifra.",
              "Comprueba al final."
            ]
          },
          {
            "type": "example",
            "title": "Ejemplo",
            "text": "En algunas divisiones como 804 ÷ 4 aparece un cero en el cociente: 201."
          },
          {
            "type": "tip",
            "title": "Truco MathCrack",
            "text": "El cero del cociente es importante: no lo omitas."
          }
        ],
        "questions": [
          {
            "id": "t7-c0-0",
            "question": "804 ÷ 4 =",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "201",
                "text": "201",
                "correct": true
              },
              {
                "id": "21",
                "text": "21",
                "correct": false
              },
              {
                "id": "210",
                "text": "210",
                "correct": false
              },
              {
                "id": "204",
                "text": "204",
                "correct": false
              }
            ],
            "explanation": "8÷4=2; en las decenas aparece 0; 4÷4=1.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t7-c0-1",
            "question": "505 ÷ 5 =",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "101",
                "text": "101",
                "correct": true
              },
              {
                "id": "11",
                "text": "11",
                "correct": false
              },
              {
                "id": "110",
                "text": "110",
                "correct": false
              },
              {
                "id": "105",
                "text": "105",
                "correct": false
              }
            ],
            "explanation": "El 0 de las decenas debe aparecer en el cociente.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t7-c0-2",
            "question": "609 ÷ 3 =",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "203",
                "text": "203",
                "correct": true
              },
              {
                "id": "23",
                "text": "23",
                "correct": false
              },
              {
                "id": "230",
                "text": "230",
                "correct": false
              },
              {
                "id": "209",
                "text": "209",
                "correct": false
              }
            ],
            "explanation": "6÷3=2, 0÷3=0, 9÷3=3.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t7-c0-3",
            "question": "408 ÷ 4 =",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "102",
                "text": "102",
                "correct": true
              },
              {
                "id": "12",
                "text": "12",
                "correct": false
              },
              {
                "id": "120",
                "text": "120",
                "correct": false
              },
              {
                "id": "108",
                "text": "108",
                "correct": false
              }
            ],
            "explanation": "El cero conserva la posición de las decenas.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t7-c0-4",
            "question": "¿Por qué no podemos quitar un cero del cociente?",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "porque-cambiar-a-el-valor-posi",
                "text": "Porque cambiaría el valor posicional del número",
                "correct": true
              },
              {
                "id": "porque-siempre-debe-haber-dos-",
                "text": "Porque siempre debe haber dos ceros",
                "correct": false
              },
              {
                "id": "porque-la-divisi-n-ser-a-una-s",
                "text": "Porque la división sería una suma",
                "correct": false
              },
              {
                "id": "porque-el-divisor-desaparece",
                "text": "Porque el divisor desaparece",
                "correct": false
              }
            ],
            "explanation": "Cada cifra ocupa una posición.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t7-c0-5",
            "question": "707 ÷ 7 =",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "101",
                "text": "101",
                "correct": true
              },
              {
                "id": "11",
                "text": "11",
                "correct": false
              },
              {
                "id": "110",
                "text": "110",
                "correct": false
              },
              {
                "id": "107",
                "text": "107",
                "correct": false
              }
            ],
            "explanation": "7÷7=1, 0, 7÷7=1.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t7-c0-6",
            "question": "900 ÷ 9 =",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "100",
                "text": "100",
                "correct": true
              },
              {
                "id": "10",
                "text": "10",
                "correct": false
              },
              {
                "id": "90",
                "text": "90",
                "correct": false
              },
              {
                "id": "101",
                "text": "101",
                "correct": false
              }
            ],
            "explanation": "9 centenas entre 9 = 1 centena.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t7-c0-7",
            "question": "¿Qué comprobación sirve?",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "divisor-cociente-resto-dividen",
                "text": "divisor × cociente + resto = dividendo",
                "correct": true
              },
              {
                "id": "sumar-dividendo-y-divisor",
                "text": "sumar dividendo y divisor",
                "correct": false
              },
              {
                "id": "restar-cociente-al-divisor",
                "text": "restar cociente al divisor",
                "correct": false
              },
              {
                "id": "multiplicar-dividendo-por-rest",
                "text": "multiplicar dividendo por resto",
                "correct": false
              }
            ],
            "explanation": "Es la prueba de la división.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          }
        ]
      },
      {
        "id": "problemas",
        "title": "Problemas de dos o más operaciones",
        "subtitle": "Elegir operaciones y resolver por pasos",
        "kind": "problems",
        "emoji": "🧩",
        "theory": [
          {
            "type": "text",
            "title": "Problemas con división",
            "text": "La división aparece cuando repartimos, formamos grupos o buscamos cuántas veces cabe una cantidad en otra. Puede combinarse con otras operaciones."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "Identifica si repartes o agrupas.",
              "Resuelve primero los datos que faltan.",
              "Divide cuando conozcas la cantidad total y los grupos.",
              "Comprueba la respuesta en el contexto."
            ]
          },
          {
            "type": "example",
            "title": "Ejemplo",
            "text": "96 cromos en 4 álbumes iguales: 96 ÷ 4 = 24 cromos por álbum."
          },
          {
            "type": "tip",
            "title": "Truco MathCrack",
            "text": "Escribe qué significa el cociente."
          }
        ],
        "questions": [
          {
            "id": "t7-p-0",
            "question": "96 cromos se reparten entre 4 niños. ¿Cuántos recibe cada uno?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "24",
                "text": "24",
                "correct": true
              },
              {
                "id": "92",
                "text": "92",
                "correct": false
              },
              {
                "id": "100",
                "text": "100",
                "correct": false
              },
              {
                "id": "384",
                "text": "384",
                "correct": false
              }
            ],
            "explanation": "96 ÷ 4 = 24.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t7-p-1",
            "question": "Hay 72 botellas en cajas de 8. ¿Cuántas cajas se llenan?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "9",
                "text": "9",
                "correct": true
              },
              {
                "id": "8",
                "text": "8",
                "correct": false
              },
              {
                "id": "64",
                "text": "64",
                "correct": false
              },
              {
                "id": "80",
                "text": "80",
                "correct": false
              }
            ],
            "explanation": "72 ÷ 8 = 9.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t7-p-2",
            "question": "Se compran 5 paquetes de 24 lápices y se reparten entre 6 clases. ¿Cuántos por clase?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "20",
                "text": "20",
                "correct": true
              },
              {
                "id": "120",
                "text": "120",
                "correct": false
              },
              {
                "id": "30",
                "text": "30",
                "correct": false
              },
              {
                "id": "4",
                "text": "4",
                "correct": false
              }
            ],
            "explanation": "5×24=120; 120÷6=20.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t7-p-3",
            "question": "84 alumnos forman equipos de 7. ¿Cuántos equipos?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "12",
                "text": "12",
                "correct": true
              },
              {
                "id": "77",
                "text": "77",
                "correct": false
              },
              {
                "id": "91",
                "text": "91",
                "correct": false
              },
              {
                "id": "14",
                "text": "14",
                "correct": false
              }
            ],
            "explanation": "84÷7=12.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t7-p-4",
            "question": "3 cajas tienen 40 libros cada una. Se reparten entre 6 mesas. ¿Cuántos por mesa?",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "20",
                "text": "20",
                "correct": true
              },
              {
                "id": "120",
                "text": "120",
                "correct": false
              },
              {
                "id": "18",
                "text": "18",
                "correct": false
              },
              {
                "id": "46",
                "text": "46",
                "correct": false
              }
            ],
            "explanation": "3×40=120; 120÷6=20.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t7-p-5",
            "question": "150 pegatinas se reparten entre 5 grupos y cada grupo usa 8. ¿Cuántas le quedan a cada grupo?",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "22",
                "text": "22",
                "correct": true
              },
              {
                "id": "30",
                "text": "30",
                "correct": false
              },
              {
                "id": "38",
                "text": "38",
                "correct": false
              },
              {
                "id": "142",
                "text": "142",
                "correct": false
              }
            ],
            "explanation": "150÷5=30; 30−8=22.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t7-p-6",
            "question": "63 jugadores hacen equipos de 9. ¿Cuántos equipos?",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "7",
                "text": "7",
                "correct": true
              },
              {
                "id": "8",
                "text": "8",
                "correct": false
              },
              {
                "id": "54",
                "text": "54",
                "correct": false
              },
              {
                "id": "72",
                "text": "72",
                "correct": false
              }
            ],
            "explanation": "63÷9=7.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t7-p-7",
            "question": "200 folios se reparten entre 8 equipos. ¿Cuántos recibe cada equipo?",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "25",
                "text": "25",
                "correct": true
              },
              {
                "id": "16",
                "text": "16",
                "correct": false
              },
              {
                "id": "24",
                "text": "24",
                "correct": false
              },
              {
                "id": "208",
                "text": "208",
                "correct": false
              }
            ],
            "explanation": "200÷8=25.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          }
        ]
      },
      {
        "id": "comprueba",
        "title": "Comprueba tu progreso",
        "subtitle": "Ejercicios mezclados de los contenidos trabajados en el tema",
        "kind": "review",
        "emoji": "🏆",
        "theory": [
          {
            "type": "text",
            "title": "Repaso final",
            "text": "Aquí no hay teoría nueva. Resuelve ejercicios de los apartados que has trabajado en este tema."
          },
          {
            "type": "important",
            "title": "Objetivo",
            "text": "Comprobar que sabes aplicar los conocimientos, no memorizar nombres de secciones."
          },
          {
            "type": "tip",
            "title": "Si fallas",
            "text": "Lee la explicación, vuelve al apartado correspondiente y practica de nuevo."
          }
        ],
        "questions": [
          {
            "id": "tema-07-review-divisor-una-cifra-0",
            "question": "Calcula: 84 ÷ 4",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "21",
                "text": "21",
                "correct": true
              },
              {
                "id": "31",
                "text": "31",
                "correct": false
              },
              {
                "id": "11",
                "text": "11",
                "correct": false
              },
              {
                "id": "22",
                "text": "22",
                "correct": false
              }
            ],
            "explanation": "El resultado correcto es 21. Haz la operación con orden y comprueba el resultado.",
            "hint": "Puedes hacerlo paso a paso."
          },
          {
            "id": "tema-07-review-divisor-una-cifra-1",
            "question": "Calcula: 96 ÷ 3",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "32",
                "text": "32",
                "correct": true
              },
              {
                "id": "42",
                "text": "42",
                "correct": false
              },
              {
                "id": "22",
                "text": "22",
                "correct": false
              },
              {
                "id": "33",
                "text": "33",
                "correct": false
              }
            ],
            "explanation": "El resultado correcto es 32. Haz la operación con orden y comprueba el resultado.",
            "hint": "Puedes hacerlo paso a paso."
          },
          {
            "id": "tema-07-review-ceros-cociente-0",
            "question": "804 ÷ 4 =",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "201",
                "text": "201",
                "correct": true
              },
              {
                "id": "21",
                "text": "21",
                "correct": false
              },
              {
                "id": "210",
                "text": "210",
                "correct": false
              },
              {
                "id": "204",
                "text": "204",
                "correct": false
              }
            ],
            "explanation": "8÷4=2; en las decenas aparece 0; 4÷4=1.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "tema-07-review-ceros-cociente-1",
            "question": "505 ÷ 5 =",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "101",
                "text": "101",
                "correct": true
              },
              {
                "id": "11",
                "text": "11",
                "correct": false
              },
              {
                "id": "110",
                "text": "110",
                "correct": false
              },
              {
                "id": "105",
                "text": "105",
                "correct": false
              }
            ],
            "explanation": "El 0 de las decenas debe aparecer en el cociente.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "tema-07-review-problemas-0",
            "question": "96 cromos se reparten entre 4 niños. ¿Cuántos recibe cada uno?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "24",
                "text": "24",
                "correct": true
              },
              {
                "id": "92",
                "text": "92",
                "correct": false
              },
              {
                "id": "100",
                "text": "100",
                "correct": false
              },
              {
                "id": "384",
                "text": "384",
                "correct": false
              }
            ],
            "explanation": "96 ÷ 4 = 24.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "tema-07-review-problemas-1",
            "question": "Hay 72 botellas en cajas de 8. ¿Cuántas cajas se llenan?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "9",
                "text": "9",
                "correct": true
              },
              {
                "id": "8",
                "text": "8",
                "correct": false
              },
              {
                "id": "64",
                "text": "64",
                "correct": false
              },
              {
                "id": "80",
                "text": "80",
                "correct": false
              }
            ],
            "explanation": "72 ÷ 8 = 9.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          }
        ]
      }
    ]
  },
  {
    "id": "tema-08",
    "order": 8,
    "title": "Las figuras planas",
    "description": "Aprende la teoría, practica con muchos ejercicios y comprueba tu progreso.",
    "emoji": "🔷",
    "sections": [
      {
        "id": "poligonos",
        "title": "Polígonos: elementos y clasificación",
        "subtitle": "Reconocer lados, vértices y clasificar por número de lados",
        "kind": "geometry",
        "emoji": "🔺",
        "theory": [
          {
            "type": "text",
            "title": "Polígonos",
            "text": "Un polígono es una figura plana limitada por segmentos. Sus elementos principales son lados y vértices."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "3 lados: triángulo",
              "4 lados: cuadrilátero",
              "5 lados: pentágono",
              "6 lados: hexágono"
            ]
          },
          {
            "type": "example",
            "title": "Ejemplo",
            "text": "Un pentágono tiene 5 lados y 5 vértices."
          },
          {
            "type": "tip",
            "title": "Truco MathCrack",
            "text": "Cuenta los lados para clasificar."
          }
        ],
        "questions": [
          {
            "id": "t8-po-0",
            "question": "Un triángulo tiene…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "3-lados",
                "text": "3 lados",
                "correct": true
              },
              {
                "id": "4-lados",
                "text": "4 lados",
                "correct": false
              },
              {
                "id": "5-lados",
                "text": "5 lados",
                "correct": false
              },
              {
                "id": "6-lados",
                "text": "6 lados",
                "correct": false
              }
            ],
            "explanation": "Tri significa tres.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t8-po-1",
            "question": "Un cuadrilátero tiene…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "4-lados",
                "text": "4 lados",
                "correct": true
              },
              {
                "id": "3",
                "text": "3",
                "correct": false
              },
              {
                "id": "5",
                "text": "5",
                "correct": false
              },
              {
                "id": "8",
                "text": "8",
                "correct": false
              }
            ],
            "explanation": "Tiene cuatro lados.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t8-po-2",
            "question": "Un pentágono tiene…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "5-lados",
                "text": "5 lados",
                "correct": true
              },
              {
                "id": "4",
                "text": "4",
                "correct": false
              },
              {
                "id": "6",
                "text": "6",
                "correct": false
              },
              {
                "id": "7",
                "text": "7",
                "correct": false
              }
            ],
            "explanation": "Penta indica cinco.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t8-po-3",
            "question": "Un hexágono tiene…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "6-lados",
                "text": "6 lados",
                "correct": true
              },
              {
                "id": "5",
                "text": "5",
                "correct": false
              },
              {
                "id": "7",
                "text": "7",
                "correct": false
              },
              {
                "id": "8",
                "text": "8",
                "correct": false
              }
            ],
            "explanation": "Hexa indica seis.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t8-po-4",
            "question": "Los puntos donde se unen los lados son…",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "v-rtices",
                "text": "vértices",
                "correct": true
              },
              {
                "id": "radios",
                "text": "radios",
                "correct": false
              },
              {
                "id": "di-metros",
                "text": "diámetros",
                "correct": false
              },
              {
                "id": "centros",
                "text": "centros",
                "correct": false
              }
            ],
            "explanation": "Son los vértices.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t8-po-5",
            "question": "¿Cuál NO es un polígono?",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "un-c-rculo",
                "text": "un círculo",
                "correct": true
              },
              {
                "id": "un-tri-ngulo",
                "text": "un triángulo",
                "correct": false
              },
              {
                "id": "un-cuadrado",
                "text": "un cuadrado",
                "correct": false
              },
              {
                "id": "un-pent-gono",
                "text": "un pentágono",
                "correct": false
              }
            ],
            "explanation": "El círculo no está limitado por segmentos.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t8-po-6",
            "question": "Un polígono de 4 lados es…",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "cuadril-tero",
                "text": "cuadrilátero",
                "correct": true
              },
              {
                "id": "tri-ngulo",
                "text": "triángulo",
                "correct": false
              },
              {
                "id": "pent-gono",
                "text": "pentágono",
                "correct": false
              },
              {
                "id": "hex-gono",
                "text": "hexágono",
                "correct": false
              }
            ],
            "explanation": "Cuatro lados.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t8-po-7",
            "question": "¿Cuántos vértices tiene normalmente un hexágono?",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "6",
                "text": "6",
                "correct": true
              },
              {
                "id": "5",
                "text": "5",
                "correct": false
              },
              {
                "id": "7",
                "text": "7",
                "correct": false
              },
              {
                "id": "12",
                "text": "12",
                "correct": false
              }
            ],
            "explanation": "Uno por cada unión de lados.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          }
        ]
      },
      {
        "id": "perimetro",
        "title": "Perímetro de un polígono",
        "subtitle": "Calcular la longitud de su contorno",
        "kind": "measurement",
        "emoji": "📏",
        "theory": [
          {
            "type": "text",
            "title": "Perímetro",
            "text": "El perímetro de un polígono es la suma de las longitudes de todos sus lados."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "Suma todos los lados.",
              "Usa la misma unidad.",
              "En un cuadrado puedes hacer lado × 4.",
              "Es una medida de longitud."
            ]
          },
          {
            "type": "example",
            "title": "Ejemplo",
            "text": "Cuadrado de lado 5 cm: P = 5+5+5+5 = 20 cm."
          },
          {
            "type": "tip",
            "title": "Truco MathCrack",
            "text": "Recorre mentalmente todo el borde para no olvidar ningún lado."
          }
        ],
        "questions": [
          {
            "id": "t8-pe-0",
            "question": "Cuadrado de lado 4 cm: perímetro",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "16-cm",
                "text": "16 cm",
                "correct": true
              },
              {
                "id": "8-cm",
                "text": "8 cm",
                "correct": false
              },
              {
                "id": "12-cm",
                "text": "12 cm",
                "correct": false
              },
              {
                "id": "20-cm",
                "text": "20 cm",
                "correct": false
              }
            ],
            "explanation": "4×4=16.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t8-pe-1",
            "question": "Triángulo de lados 3, 4 y 5 cm: perímetro",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "12-cm",
                "text": "12 cm",
                "correct": true
              },
              {
                "id": "7-cm",
                "text": "7 cm",
                "correct": false
              },
              {
                "id": "15-cm",
                "text": "15 cm",
                "correct": false
              },
              {
                "id": "20-cm",
                "text": "20 cm",
                "correct": false
              }
            ],
            "explanation": "3+4+5=12.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t8-pe-2",
            "question": "Rectángulo de lados 6 y 3 cm: perímetro",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "18-cm",
                "text": "18 cm",
                "correct": true
              },
              {
                "id": "9-cm",
                "text": "9 cm",
                "correct": false
              },
              {
                "id": "12-cm",
                "text": "12 cm",
                "correct": false
              },
              {
                "id": "36-cm",
                "text": "36 cm",
                "correct": false
              }
            ],
            "explanation": "6+3+6+3=18.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t8-pe-3",
            "question": "Pentágono regular de lado 2 cm: perímetro",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "10-cm",
                "text": "10 cm",
                "correct": true
              },
              {
                "id": "7-cm",
                "text": "7 cm",
                "correct": false
              },
              {
                "id": "5-cm",
                "text": "5 cm",
                "correct": false
              },
              {
                "id": "12-cm",
                "text": "12 cm",
                "correct": false
              }
            ],
            "explanation": "5×2=10.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t8-pe-4",
            "question": "¿Qué hacemos para hallar un perímetro?",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "sumar-todos-los-lados",
                "text": "sumar todos los lados",
                "correct": true
              },
              {
                "id": "multiplicar-siempre-dos-lados",
                "text": "multiplicar siempre dos lados",
                "correct": false
              },
              {
                "id": "contar-v-rtices",
                "text": "contar vértices",
                "correct": false
              },
              {
                "id": "medir-el-centro",
                "text": "medir el centro",
                "correct": false
              }
            ],
            "explanation": "Es la longitud del contorno.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t8-pe-5",
            "question": "Cuadrado de lado 7 m: perímetro",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "28-m",
                "text": "28 m",
                "correct": true
              },
              {
                "id": "14-m",
                "text": "14 m",
                "correct": false
              },
              {
                "id": "49-m",
                "text": "49 m",
                "correct": false
              },
              {
                "id": "21-m",
                "text": "21 m",
                "correct": false
              }
            ],
            "explanation": "7×4=28.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t8-pe-6",
            "question": "Triángulo equilátero de lado 6 cm: perímetro",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "18-cm",
                "text": "18 cm",
                "correct": true
              },
              {
                "id": "12-cm",
                "text": "12 cm",
                "correct": false
              },
              {
                "id": "36-cm",
                "text": "36 cm",
                "correct": false
              },
              {
                "id": "24-cm",
                "text": "24 cm",
                "correct": false
              }
            ],
            "explanation": "6×3=18.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t8-pe-7",
            "question": "¿El perímetro se expresa en unidades de…",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "longitud",
                "text": "longitud",
                "correct": true
              },
              {
                "id": "capacidad",
                "text": "capacidad",
                "correct": false
              },
              {
                "id": "masa",
                "text": "masa",
                "correct": false
              },
              {
                "id": "tiempo",
                "text": "tiempo",
                "correct": false
              }
            ],
            "explanation": "Mide una longitud.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          }
        ]
      },
      {
        "id": "triangulos",
        "title": "Clasificación de triángulos según sus lados",
        "subtitle": "Distinguir equiláteros, isósceles y escalenos",
        "kind": "geometry",
        "emoji": "🔺",
        "theory": [
          {
            "type": "text",
            "title": "Triángulos según sus lados",
            "text": "Podemos clasificar los triángulos comparando las longitudes de sus tres lados."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "Equilátero: 3 lados iguales.",
              "Isósceles: 2 lados iguales.",
              "Escaleno: 3 lados diferentes.",
              "Todos tienen 3 lados y 3 vértices."
            ]
          },
          {
            "type": "example",
            "title": "Ejemplo",
            "text": "Un triángulo de lados 5, 5 y 3 cm es isósceles."
          },
          {
            "type": "tip",
            "title": "Truco MathCrack",
            "text": "Compara los tres números que miden sus lados."
          }
        ],
        "questions": [
          {
            "id": "t8-tr-0",
            "question": "Tres lados iguales →",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "equil-tero",
                "text": "equilátero",
                "correct": true
              },
              {
                "id": "is-sceles",
                "text": "isósceles",
                "correct": false
              },
              {
                "id": "escaleno",
                "text": "escaleno",
                "correct": false
              },
              {
                "id": "cuadril-tero",
                "text": "cuadrilátero",
                "correct": false
              }
            ],
            "explanation": "Equilátero tiene tres lados iguales.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t8-tr-1",
            "question": "Dos lados iguales →",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "is-sceles",
                "text": "isósceles",
                "correct": true
              },
              {
                "id": "equil-tero",
                "text": "equilátero",
                "correct": false
              },
              {
                "id": "escaleno",
                "text": "escaleno",
                "correct": false
              },
              {
                "id": "pent-gono",
                "text": "pentágono",
                "correct": false
              }
            ],
            "explanation": "Isósceles tiene dos lados iguales.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t8-tr-2",
            "question": "Tres lados diferentes →",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "escaleno",
                "text": "escaleno",
                "correct": true
              },
              {
                "id": "is-sceles",
                "text": "isósceles",
                "correct": false
              },
              {
                "id": "equil-tero",
                "text": "equilátero",
                "correct": false
              },
              {
                "id": "rect-ngulo",
                "text": "rectángulo",
                "correct": false
              }
            ],
            "explanation": "Escaleno no tiene lados iguales.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t8-tr-3",
            "question": "Lados 4, 4, 4 →",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "equil-tero",
                "text": "equilátero",
                "correct": true
              },
              {
                "id": "is-sceles",
                "text": "isósceles",
                "correct": false
              },
              {
                "id": "escaleno",
                "text": "escaleno",
                "correct": false
              },
              {
                "id": "cuadrado",
                "text": "cuadrado",
                "correct": false
              }
            ],
            "explanation": "Los tres son iguales.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t8-tr-4",
            "question": "Lados 6, 6, 3 →",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "is-sceles",
                "text": "isósceles",
                "correct": true
              },
              {
                "id": "equil-tero",
                "text": "equilátero",
                "correct": false
              },
              {
                "id": "escaleno",
                "text": "escaleno",
                "correct": false
              },
              {
                "id": "hex-gono",
                "text": "hexágono",
                "correct": false
              }
            ],
            "explanation": "Hay dos iguales.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t8-tr-5",
            "question": "Lados 3, 4, 5 →",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "escaleno",
                "text": "escaleno",
                "correct": true
              },
              {
                "id": "equil-tero",
                "text": "equilátero",
                "correct": false
              },
              {
                "id": "is-sceles",
                "text": "isósceles",
                "correct": false
              },
              {
                "id": "cuadrado",
                "text": "cuadrado",
                "correct": false
              }
            ],
            "explanation": "Todos son distintos.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t8-tr-6",
            "question": "Todo triángulo tiene…",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "3-lados",
                "text": "3 lados",
                "correct": true
              },
              {
                "id": "4",
                "text": "4",
                "correct": false
              },
              {
                "id": "5",
                "text": "5",
                "correct": false
              },
              {
                "id": "6",
                "text": "6",
                "correct": false
              }
            ],
            "explanation": "Es su característica básica.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t8-tr-7",
            "question": "Todo triángulo tiene…",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "3-v-rtices",
                "text": "3 vértices",
                "correct": true
              },
              {
                "id": "2",
                "text": "2",
                "correct": false
              },
              {
                "id": "4",
                "text": "4",
                "correct": false
              },
              {
                "id": "6",
                "text": "6",
                "correct": false
              }
            ],
            "explanation": "Uno en cada unión de lados.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          }
        ]
      },
      {
        "id": "cuadrilateros",
        "title": "Clasificación de cuadriláteros",
        "subtitle": "Reconocer paralelogramos y otros cuadriláteros",
        "kind": "geometry",
        "emoji": "▱",
        "theory": [
          {
            "type": "text",
            "title": "Cuadriláteros",
            "text": "Los cuadriláteros son polígonos de cuatro lados. Se pueden clasificar observando sus lados paralelos y sus ángulos."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "Cuadrado: 4 lados iguales y 4 ángulos rectos.",
              "Rectángulo: lados opuestos iguales y 4 ángulos rectos.",
              "Rombo: 4 lados iguales.",
              "Trapecio: tiene un par de lados paralelos."
            ]
          },
          {
            "type": "example",
            "title": "Ejemplo",
            "text": "Un cuadrado es un cuadrilátero y también un paralelogramo."
          },
          {
            "type": "tip",
            "title": "Truco MathCrack",
            "text": "Primero comprueba que tenga cuatro lados."
          }
        ],
        "questions": [
          {
            "id": "t8-cu-0",
            "question": "¿Cuántos lados tiene un cuadrilátero?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "4",
                "text": "4",
                "correct": true
              },
              {
                "id": "3",
                "text": "3",
                "correct": false
              },
              {
                "id": "5",
                "text": "5",
                "correct": false
              },
              {
                "id": "6",
                "text": "6",
                "correct": false
              }
            ],
            "explanation": "Cuadri indica cuatro.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t8-cu-1",
            "question": "Figura con 4 lados iguales y 4 ángulos rectos",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "cuadrado",
                "text": "cuadrado",
                "correct": true
              },
              {
                "id": "tri-ngulo",
                "text": "triángulo",
                "correct": false
              },
              {
                "id": "trapecio",
                "text": "trapecio",
                "correct": false
              },
              {
                "id": "c-rculo",
                "text": "círculo",
                "correct": false
              }
            ],
            "explanation": "Es un cuadrado.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t8-cu-2",
            "question": "Figura con 4 ángulos rectos y lados opuestos iguales",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "rect-ngulo",
                "text": "rectángulo",
                "correct": true
              },
              {
                "id": "pent-gono",
                "text": "pentágono",
                "correct": false
              },
              {
                "id": "tri-ngulo",
                "text": "triángulo",
                "correct": false
              },
              {
                "id": "c-rculo",
                "text": "círculo",
                "correct": false
              }
            ],
            "explanation": "Es un rectángulo.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t8-cu-3",
            "question": "Un rombo tiene…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "4-lados-iguales",
                "text": "4 lados iguales",
                "correct": true
              },
              {
                "id": "3-lados",
                "text": "3 lados",
                "correct": false
              },
              {
                "id": "ning-n-lado-igual",
                "text": "ningún lado igual",
                "correct": false
              },
              {
                "id": "un-solo-v-rtice",
                "text": "un solo vértice",
                "correct": false
              }
            ],
            "explanation": "Es su rasgo característico.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t8-cu-4",
            "question": "Un trapecio tiene…",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "un-par-de-lados-paralelos",
                "text": "un par de lados paralelos",
                "correct": true
              },
              {
                "id": "3-lados",
                "text": "3 lados",
                "correct": false
              },
              {
                "id": "todos-los-lados-curvos",
                "text": "todos los lados curvos",
                "correct": false
              },
              {
                "id": "ning-n-v-rtice",
                "text": "ningún vértice",
                "correct": false
              }
            ],
            "explanation": "Tiene cuatro lados y un par paralelo.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t8-cu-5",
            "question": "¿Un cuadrado es cuadrilátero?",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "s",
                "text": "Sí",
                "correct": true
              },
              {
                "id": "no",
                "text": "No",
                "correct": false
              },
              {
                "id": "solo-si-es-grande",
                "text": "Solo si es grande",
                "correct": false
              },
              {
                "id": "solo-si-est-girado",
                "text": "Solo si está girado",
                "correct": false
              }
            ],
            "explanation": "Tiene cuatro lados.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t8-cu-6",
            "question": "¿Un rectángulo tiene 4 ángulos rectos?",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "s",
                "text": "Sí",
                "correct": true
              },
              {
                "id": "no",
                "text": "No",
                "correct": false
              },
              {
                "id": "solo-dos",
                "text": "Solo dos",
                "correct": false
              },
              {
                "id": "ninguno",
                "text": "Ninguno",
                "correct": false
              }
            ],
            "explanation": "Todos sus ángulos son rectos.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t8-cu-7",
            "question": "¿Cuál tiene cuatro lados?",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "rombo",
                "text": "rombo",
                "correct": true
              },
              {
                "id": "tri-ngulo",
                "text": "triángulo",
                "correct": false
              },
              {
                "id": "pent-gono",
                "text": "pentágono",
                "correct": false
              },
              {
                "id": "hex-gono",
                "text": "hexágono",
                "correct": false
              }
            ],
            "explanation": "El rombo es cuadrilátero.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          }
        ]
      },
      {
        "id": "area",
        "title": "Área con un cuadrado unidad",
        "subtitle": "Medir superficies contando cuadrados unidad",
        "kind": "measurement",
        "emoji": "🟧",
        "theory": [
          {
            "type": "text",
            "title": "Área",
            "text": "El área mide la superficie que ocupa una figura. En 3.º podemos medirla contando cuántos cuadrados unidad la cubren."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "Cuenta cuadrados completos.",
              "No confundas área con perímetro.",
              "Dos figuras pueden tener igual área y distinto perímetro.",
              "El cuadrado unidad es la referencia."
            ]
          },
          {
            "type": "example",
            "title": "Ejemplo",
            "text": "Un rectángulo de 3 filas y 4 columnas ocupa 12 cuadrados unidad."
          },
          {
            "type": "tip",
            "title": "Truco MathCrack",
            "text": "Filas × columnas ayuda en rectángulos."
          }
        ],
        "questions": [
          {
            "id": "t8-ar-0",
            "question": "Rectángulo de 3 filas y 4 columnas: área",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "12-cuadrados-unidad",
                "text": "12 cuadrados unidad",
                "correct": true
              },
              {
                "id": "7",
                "text": "7",
                "correct": false
              },
              {
                "id": "14",
                "text": "14",
                "correct": false
              },
              {
                "id": "24",
                "text": "24",
                "correct": false
              }
            ],
            "explanation": "3×4=12.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t8-ar-1",
            "question": "Rectángulo de 2 × 6 cuadrados: área",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "12",
                "text": "12",
                "correct": true
              },
              {
                "id": "8",
                "text": "8",
                "correct": false
              },
              {
                "id": "16",
                "text": "16",
                "correct": false
              },
              {
                "id": "6",
                "text": "6",
                "correct": false
              }
            ],
            "explanation": "2×6=12.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t8-ar-2",
            "question": "Cuadrado de 4 × 4 cuadrados: área",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "16",
                "text": "16",
                "correct": true
              },
              {
                "id": "8",
                "text": "8",
                "correct": false
              },
              {
                "id": "12",
                "text": "12",
                "correct": false
              },
              {
                "id": "20",
                "text": "20",
                "correct": false
              }
            ],
            "explanation": "4×4=16.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t8-ar-3",
            "question": "El área mide…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "la-superficie",
                "text": "la superficie",
                "correct": true
              },
              {
                "id": "solo-el-borde",
                "text": "solo el borde",
                "correct": false
              },
              {
                "id": "el-tiempo",
                "text": "el tiempo",
                "correct": false
              },
              {
                "id": "la-masa",
                "text": "la masa",
                "correct": false
              }
            ],
            "explanation": "Mide lo que ocupa una figura.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t8-ar-4",
            "question": "El perímetro mide…",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "el-contorno",
                "text": "el contorno",
                "correct": true
              },
              {
                "id": "la-superficie",
                "text": "la superficie",
                "correct": false
              },
              {
                "id": "la-capacidad",
                "text": "la capacidad",
                "correct": false
              },
              {
                "id": "el-peso",
                "text": "el peso",
                "correct": false
              }
            ],
            "explanation": "Es la longitud del borde.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t8-ar-5",
            "question": "5 filas de 3 cuadrados ocupan…",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "15-cuadrados",
                "text": "15 cuadrados",
                "correct": true
              },
              {
                "id": "8",
                "text": "8",
                "correct": false
              },
              {
                "id": "10",
                "text": "10",
                "correct": false
              },
              {
                "id": "20",
                "text": "20",
                "correct": false
              }
            ],
            "explanation": "5×3=15.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t8-ar-6",
            "question": "Dos figuras pueden tener la misma área y…",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "distinto-per-metro",
                "text": "distinto perímetro",
                "correct": true
              },
              {
                "id": "deben-ser-id-nticas",
                "text": "deben ser idénticas",
                "correct": false
              },
              {
                "id": "no-tener-lados",
                "text": "no tener lados",
                "correct": false
              },
              {
                "id": "ser-c-rculos",
                "text": "ser círculos",
                "correct": false
              }
            ],
            "explanation": "Área y perímetro son medidas distintas.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t8-ar-7",
            "question": "La unidad sencilla usada aquí para medir área es…",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "cuadrado-unidad",
                "text": "cuadrado unidad",
                "correct": true
              },
              {
                "id": "litro",
                "text": "litro",
                "correct": false
              },
              {
                "id": "kilogramo",
                "text": "kilogramo",
                "correct": false
              },
              {
                "id": "minuto",
                "text": "minuto",
                "correct": false
              }
            ],
            "explanation": "Cubrimos la superficie con cuadrados.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          }
        ]
      },
      {
        "id": "circunferencia-circulo",
        "title": "Circunferencia y círculo",
        "subtitle": "Distinguir borde y superficie circular",
        "kind": "geometry",
        "emoji": "⭕",
        "theory": [
          {
            "type": "text",
            "title": "Circunferencia y círculo",
            "text": "La circunferencia es una línea curva cerrada. El círculo es la superficie interior limitada por esa circunferencia."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "Centro: punto central.",
              "Radio: segmento del centro a la circunferencia.",
              "Diámetro: segmento que pasa por el centro y une dos puntos de la circunferencia.",
              "El diámetro mide dos radios."
            ]
          },
          {
            "type": "example",
            "title": "Ejemplo",
            "text": "Si el radio mide 3 cm, el diámetro mide 6 cm."
          },
          {
            "type": "tip",
            "title": "Truco MathCrack",
            "text": "Circunferencia = borde; círculo = interior."
          }
        ],
        "questions": [
          {
            "id": "t8-ci-0",
            "question": "La línea curva cerrada exterior es…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "circunferencia",
                "text": "circunferencia",
                "correct": true
              },
              {
                "id": "c-rculo",
                "text": "círculo",
                "correct": false
              },
              {
                "id": "radio",
                "text": "radio",
                "correct": false
              },
              {
                "id": "centro",
                "text": "centro",
                "correct": false
              }
            ],
            "explanation": "Es el borde.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t8-ci-1",
            "question": "La superficie interior es…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "c-rculo",
                "text": "círculo",
                "correct": true
              },
              {
                "id": "circunferencia",
                "text": "circunferencia",
                "correct": false
              },
              {
                "id": "di-metro",
                "text": "diámetro",
                "correct": false
              },
              {
                "id": "v-rtice",
                "text": "vértice",
                "correct": false
              }
            ],
            "explanation": "El círculo incluye el interior.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t8-ci-2",
            "question": "Segmento del centro al borde",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "radio",
                "text": "radio",
                "correct": true
              },
              {
                "id": "di-metro",
                "text": "diámetro",
                "correct": false
              },
              {
                "id": "lado",
                "text": "lado",
                "correct": false
              },
              {
                "id": "eje",
                "text": "eje",
                "correct": false
              }
            ],
            "explanation": "Es el radio.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t8-ci-3",
            "question": "Segmento que pasa por el centro y une dos puntos del borde",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "di-metro",
                "text": "diámetro",
                "correct": true
              },
              {
                "id": "radio",
                "text": "radio",
                "correct": false
              },
              {
                "id": "lado",
                "text": "lado",
                "correct": false
              },
              {
                "id": "altura",
                "text": "altura",
                "correct": false
              }
            ],
            "explanation": "Es el diámetro.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t8-ci-4",
            "question": "Si radio = 4 cm, diámetro =",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "8-cm",
                "text": "8 cm",
                "correct": true
              },
              {
                "id": "4-cm",
                "text": "4 cm",
                "correct": false
              },
              {
                "id": "2-cm",
                "text": "2 cm",
                "correct": false
              },
              {
                "id": "16-cm",
                "text": "16 cm",
                "correct": false
              }
            ],
            "explanation": "El diámetro es dos veces el radio.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t8-ci-5",
            "question": "Si diámetro = 10 cm, radio =",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "5-cm",
                "text": "5 cm",
                "correct": true
              },
              {
                "id": "20-cm",
                "text": "20 cm",
                "correct": false
              },
              {
                "id": "10-cm",
                "text": "10 cm",
                "correct": false
              },
              {
                "id": "2-cm",
                "text": "2 cm",
                "correct": false
              }
            ],
            "explanation": "El radio es la mitad.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t8-ci-6",
            "question": "¿El círculo contiene superficie?",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "s",
                "text": "Sí",
                "correct": true
              },
              {
                "id": "no",
                "text": "No",
                "correct": false
              },
              {
                "id": "solo-la-l-nea",
                "text": "Solo la línea",
                "correct": false
              },
              {
                "id": "nunca",
                "text": "Nunca",
                "correct": false
              }
            ],
            "explanation": "El círculo es una región plana.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t8-ci-7",
            "question": "¿La circunferencia es el borde del círculo?",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "s",
                "text": "Sí",
                "correct": true
              },
              {
                "id": "no",
                "text": "No",
                "correct": false
              },
              {
                "id": "es-el-centro",
                "text": "Es el centro",
                "correct": false
              },
              {
                "id": "es-un-pol-gono",
                "text": "Es un polígono",
                "correct": false
              }
            ],
            "explanation": "La circunferencia limita el círculo.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          }
        ]
      },
      {
        "id": "comprueba",
        "title": "Comprueba tu progreso",
        "subtitle": "Ejercicios mezclados de los contenidos trabajados en el tema",
        "kind": "review",
        "emoji": "🏆",
        "theory": [
          {
            "type": "text",
            "title": "Repaso final",
            "text": "Aquí no hay teoría nueva. Resuelve ejercicios de los apartados que has trabajado en este tema."
          },
          {
            "type": "important",
            "title": "Objetivo",
            "text": "Comprobar que sabes aplicar los conocimientos, no memorizar nombres de secciones."
          },
          {
            "type": "tip",
            "title": "Si fallas",
            "text": "Lee la explicación, vuelve al apartado correspondiente y practica de nuevo."
          }
        ],
        "questions": [
          {
            "id": "tema-08-review-poligonos-0",
            "question": "Un triángulo tiene…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "3-lados",
                "text": "3 lados",
                "correct": true
              },
              {
                "id": "4-lados",
                "text": "4 lados",
                "correct": false
              },
              {
                "id": "5-lados",
                "text": "5 lados",
                "correct": false
              },
              {
                "id": "6-lados",
                "text": "6 lados",
                "correct": false
              }
            ],
            "explanation": "Tri significa tres.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "tema-08-review-poligonos-1",
            "question": "Un cuadrilátero tiene…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "4-lados",
                "text": "4 lados",
                "correct": true
              },
              {
                "id": "3",
                "text": "3",
                "correct": false
              },
              {
                "id": "5",
                "text": "5",
                "correct": false
              },
              {
                "id": "8",
                "text": "8",
                "correct": false
              }
            ],
            "explanation": "Tiene cuatro lados.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "tema-08-review-perimetro-0",
            "question": "Cuadrado de lado 4 cm: perímetro",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "16-cm",
                "text": "16 cm",
                "correct": true
              },
              {
                "id": "8-cm",
                "text": "8 cm",
                "correct": false
              },
              {
                "id": "12-cm",
                "text": "12 cm",
                "correct": false
              },
              {
                "id": "20-cm",
                "text": "20 cm",
                "correct": false
              }
            ],
            "explanation": "4×4=16.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "tema-08-review-perimetro-1",
            "question": "Triángulo de lados 3, 4 y 5 cm: perímetro",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "12-cm",
                "text": "12 cm",
                "correct": true
              },
              {
                "id": "7-cm",
                "text": "7 cm",
                "correct": false
              },
              {
                "id": "15-cm",
                "text": "15 cm",
                "correct": false
              },
              {
                "id": "20-cm",
                "text": "20 cm",
                "correct": false
              }
            ],
            "explanation": "3+4+5=12.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "tema-08-review-triangulos-0",
            "question": "Tres lados iguales →",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "equil-tero",
                "text": "equilátero",
                "correct": true
              },
              {
                "id": "is-sceles",
                "text": "isósceles",
                "correct": false
              },
              {
                "id": "escaleno",
                "text": "escaleno",
                "correct": false
              },
              {
                "id": "cuadril-tero",
                "text": "cuadrilátero",
                "correct": false
              }
            ],
            "explanation": "Equilátero tiene tres lados iguales.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "tema-08-review-triangulos-1",
            "question": "Dos lados iguales →",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "is-sceles",
                "text": "isósceles",
                "correct": true
              },
              {
                "id": "equil-tero",
                "text": "equilátero",
                "correct": false
              },
              {
                "id": "escaleno",
                "text": "escaleno",
                "correct": false
              },
              {
                "id": "pent-gono",
                "text": "pentágono",
                "correct": false
              }
            ],
            "explanation": "Isósceles tiene dos lados iguales.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "tema-08-review-cuadrilateros-0",
            "question": "¿Cuántos lados tiene un cuadrilátero?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "4",
                "text": "4",
                "correct": true
              },
              {
                "id": "3",
                "text": "3",
                "correct": false
              },
              {
                "id": "5",
                "text": "5",
                "correct": false
              },
              {
                "id": "6",
                "text": "6",
                "correct": false
              }
            ],
            "explanation": "Cuadri indica cuatro.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "tema-08-review-cuadrilateros-1",
            "question": "Figura con 4 lados iguales y 4 ángulos rectos",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "cuadrado",
                "text": "cuadrado",
                "correct": true
              },
              {
                "id": "tri-ngulo",
                "text": "triángulo",
                "correct": false
              },
              {
                "id": "trapecio",
                "text": "trapecio",
                "correct": false
              },
              {
                "id": "c-rculo",
                "text": "círculo",
                "correct": false
              }
            ],
            "explanation": "Es un cuadrado.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "tema-08-review-area-0",
            "question": "Rectángulo de 3 filas y 4 columnas: área",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "12-cuadrados-unidad",
                "text": "12 cuadrados unidad",
                "correct": true
              },
              {
                "id": "7",
                "text": "7",
                "correct": false
              },
              {
                "id": "14",
                "text": "14",
                "correct": false
              },
              {
                "id": "24",
                "text": "24",
                "correct": false
              }
            ],
            "explanation": "3×4=12.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "tema-08-review-area-1",
            "question": "Rectángulo de 2 × 6 cuadrados: área",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "12",
                "text": "12",
                "correct": true
              },
              {
                "id": "8",
                "text": "8",
                "correct": false
              },
              {
                "id": "16",
                "text": "16",
                "correct": false
              },
              {
                "id": "6",
                "text": "6",
                "correct": false
              }
            ],
            "explanation": "2×6=12.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "tema-08-review-circunferencia-circulo-0",
            "question": "La línea curva cerrada exterior es…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "circunferencia",
                "text": "circunferencia",
                "correct": true
              },
              {
                "id": "c-rculo",
                "text": "círculo",
                "correct": false
              },
              {
                "id": "radio",
                "text": "radio",
                "correct": false
              },
              {
                "id": "centro",
                "text": "centro",
                "correct": false
              }
            ],
            "explanation": "Es el borde.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "tema-08-review-circunferencia-circulo-1",
            "question": "La superficie interior es…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "c-rculo",
                "text": "círculo",
                "correct": true
              },
              {
                "id": "circunferencia",
                "text": "circunferencia",
                "correct": false
              },
              {
                "id": "di-metro",
                "text": "diámetro",
                "correct": false
              },
              {
                "id": "v-rtice",
                "text": "vértice",
                "correct": false
              }
            ],
            "explanation": "El círculo incluye el interior.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          }
        ]
      }
    ]
  },
  {
    "id": "tema-09",
    "order": 9,
    "title": "Medidas de longitud",
    "description": "Aprende la teoría, practica con muchos ejercicios y comprueba tu progreso.",
    "emoji": "📏",
    "sections": [
      {
        "id": "cm-m",
        "title": "El centímetro y el metro",
        "subtitle": "Elegir y relacionar cm y m",
        "kind": "measurement",
        "emoji": "📏",
        "theory": [
          {
            "type": "text",
            "title": "Centímetro y metro",
            "text": "Usamos centímetros para longitudes pequeñas y metros para longitudes mayores."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "1 m = 100 cm",
              "Una regla suele estar graduada en cm y mm.",
              "La altura de una puerta puede medirse en m.",
              "La longitud de un lápiz, en cm."
            ]
          },
          {
            "type": "example",
            "title": "Ejemplo",
            "text": "2 m = 200 cm."
          },
          {
            "type": "tip",
            "title": "Truco MathCrack",
            "text": "Para pasar de metros a centímetros, multiplica por 100."
          }
        ],
        "questions": [
          {
            "id": "t9-cm-0",
            "question": "1 m =",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "100-cm",
                "text": "100 cm",
                "correct": true
              },
              {
                "id": "10-cm",
                "text": "10 cm",
                "correct": false
              },
              {
                "id": "1-000-cm",
                "text": "1.000 cm",
                "correct": false
              },
              {
                "id": "50-cm",
                "text": "50 cm",
                "correct": false
              }
            ],
            "explanation": "Un metro contiene 100 centímetros.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t9-cm-1",
            "question": "2 m =",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "200-cm",
                "text": "200 cm",
                "correct": true
              },
              {
                "id": "20-cm",
                "text": "20 cm",
                "correct": false
              },
              {
                "id": "102-cm",
                "text": "102 cm",
                "correct": false
              },
              {
                "id": "2-000-cm",
                "text": "2.000 cm",
                "correct": false
              }
            ],
            "explanation": "2×100=200.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t9-cm-2",
            "question": "300 cm =",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "3-m",
                "text": "3 m",
                "correct": true
              },
              {
                "id": "30-m",
                "text": "30 m",
                "correct": false
              },
              {
                "id": "300-m",
                "text": "300 m",
                "correct": false
              },
              {
                "id": "13-m",
                "text": "13 m",
                "correct": false
              }
            ],
            "explanation": "300÷100=3.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t9-cm-3",
            "question": "Un lápiz se mide mejor en…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "cm",
                "text": "cm",
                "correct": true
              },
              {
                "id": "km",
                "text": "km",
                "correct": false
              },
              {
                "id": "kg",
                "text": "kg",
                "correct": false
              },
              {
                "id": "l",
                "text": "l",
                "correct": false
              }
            ],
            "explanation": "Es una longitud pequeña.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t9-cm-4",
            "question": "Una habitación se mide mejor en…",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "m",
                "text": "m",
                "correct": true
              },
              {
                "id": "mm",
                "text": "mm",
                "correct": false
              },
              {
                "id": "g",
                "text": "g",
                "correct": false
              },
              {
                "id": "ml",
                "text": "ml",
                "correct": false
              }
            ],
            "explanation": "El metro es adecuado.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t9-cm-5",
            "question": "5 m =",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "500-cm",
                "text": "500 cm",
                "correct": true
              },
              {
                "id": "50-cm",
                "text": "50 cm",
                "correct": false
              },
              {
                "id": "5-000-cm",
                "text": "5.000 cm",
                "correct": false
              },
              {
                "id": "105-cm",
                "text": "105 cm",
                "correct": false
              }
            ],
            "explanation": "5×100=500.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t9-cm-6",
            "question": "450 cm son…",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "4-m-y-50-cm",
                "text": "4 m y 50 cm",
                "correct": true
              },
              {
                "id": "45-m",
                "text": "45 m",
                "correct": false
              },
              {
                "id": "4-m-y-5-cm",
                "text": "4 m y 5 cm",
                "correct": false
              },
              {
                "id": "450-m",
                "text": "450 m",
                "correct": false
              }
            ],
            "explanation": "400 cm=4 m y sobran 50 cm.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t9-cm-7",
            "question": "¿Qué unidad mide longitud?",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "cent-metro",
                "text": "centímetro",
                "correct": true
              },
              {
                "id": "litro",
                "text": "litro",
                "correct": false
              },
              {
                "id": "kilogramo",
                "text": "kilogramo",
                "correct": false
              },
              {
                "id": "hora",
                "text": "hora",
                "correct": false
              }
            ],
            "explanation": "El centímetro es longitud.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          }
        ]
      },
      {
        "id": "km",
        "title": "El kilómetro",
        "subtitle": "Medir grandes distancias",
        "kind": "measurement",
        "emoji": "🛣️",
        "theory": [
          {
            "type": "text",
            "title": "Kilómetro",
            "text": "El kilómetro se usa para distancias grandes, como entre pueblos o ciudades."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "1 km = 1.000 m",
              "5 km = 5.000 m",
              "No usaríamos km para un lápiz.",
              "Las carreteras suelen indicar distancias en km."
            ]
          },
          {
            "type": "example",
            "title": "Ejemplo",
            "text": "3 km = 3.000 m."
          },
          {
            "type": "tip",
            "title": "Truco MathCrack",
            "text": "De km a m, multiplica por 1.000."
          }
        ],
        "questions": [
          {
            "id": "t9-km-0",
            "question": "1 km =",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "1-000-m",
                "text": "1.000 m",
                "correct": true
              },
              {
                "id": "100-m",
                "text": "100 m",
                "correct": false
              },
              {
                "id": "10-000-m",
                "text": "10.000 m",
                "correct": false
              },
              {
                "id": "10-m",
                "text": "10 m",
                "correct": false
              }
            ],
            "explanation": "Un kilómetro son mil metros.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t9-km-1",
            "question": "4 km =",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "4-000-m",
                "text": "4.000 m",
                "correct": true
              },
              {
                "id": "400-m",
                "text": "400 m",
                "correct": false
              },
              {
                "id": "40-m",
                "text": "40 m",
                "correct": false
              },
              {
                "id": "4-100-m",
                "text": "4.100 m",
                "correct": false
              }
            ],
            "explanation": "4×1.000.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t9-km-2",
            "question": "2.000 m =",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "2-km",
                "text": "2 km",
                "correct": true
              },
              {
                "id": "20-km",
                "text": "20 km",
                "correct": false
              },
              {
                "id": "200-km",
                "text": "200 km",
                "correct": false
              },
              {
                "id": "1-km",
                "text": "1 km",
                "correct": false
              }
            ],
            "explanation": "2.000÷1.000=2.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t9-km-3",
            "question": "Distancia entre dos ciudades: mejor en…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "km",
                "text": "km",
                "correct": true
              },
              {
                "id": "mm",
                "text": "mm",
                "correct": false
              },
              {
                "id": "cm",
                "text": "cm",
                "correct": false
              },
              {
                "id": "g",
                "text": "g",
                "correct": false
              }
            ],
            "explanation": "Es una distancia grande.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t9-km-4",
            "question": "7 km =",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "7-000-m",
                "text": "7.000 m",
                "correct": true
              },
              {
                "id": "700-m",
                "text": "700 m",
                "correct": false
              },
              {
                "id": "70-000-m",
                "text": "70.000 m",
                "correct": false
              },
              {
                "id": "1-007-m",
                "text": "1.007 m",
                "correct": false
              }
            ],
            "explanation": "7×1.000.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t9-km-5",
            "question": "5.500 m =",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "5-km-y-500-m",
                "text": "5 km y 500 m",
                "correct": true
              },
              {
                "id": "55-km",
                "text": "55 km",
                "correct": false
              },
              {
                "id": "5-km-y-50-m",
                "text": "5 km y 50 m",
                "correct": false
              },
              {
                "id": "500-km",
                "text": "500 km",
                "correct": false
              }
            ],
            "explanation": "5.000 m=5 km y sobran 500.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t9-km-6",
            "question": "¿Qué es mayor?",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "1-km",
                "text": "1 km",
                "correct": true
              },
              {
                "id": "900-m",
                "text": "900 m",
                "correct": false
              },
              {
                "id": "500-m",
                "text": "500 m",
                "correct": false
              },
              {
                "id": "100-m",
                "text": "100 m",
                "correct": false
              }
            ],
            "explanation": "1 km=1.000 m.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t9-km-7",
            "question": "3 km + 500 m =",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "3-500-m",
                "text": "3.500 m",
                "correct": true
              },
              {
                "id": "800-m",
                "text": "800 m",
                "correct": false
              },
              {
                "id": "3-050-m",
                "text": "3.050 m",
                "correct": false
              },
              {
                "id": "35-000-m",
                "text": "35.000 m",
                "correct": false
              }
            ],
            "explanation": "3 km=3.000 m; +500.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          }
        ]
      },
      {
        "id": "mm",
        "title": "El milímetro",
        "subtitle": "Medir longitudes muy pequeñas",
        "kind": "measurement",
        "emoji": "📐",
        "theory": [
          {
            "type": "text",
            "title": "Milímetro",
            "text": "El milímetro es una unidad menor que el centímetro, útil para longitudes pequeñas y precisas."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "1 cm = 10 mm",
              "10 cm = 100 mm",
              "En la regla, los pequeños intervalos suelen ser mm.",
              "Para objetos muy finos usamos mm."
            ]
          },
          {
            "type": "example",
            "title": "Ejemplo",
            "text": "3 cm = 30 mm."
          },
          {
            "type": "tip",
            "title": "Truco MathCrack",
            "text": "De cm a mm, multiplica por 10."
          }
        ],
        "questions": [
          {
            "id": "t9-mm-0",
            "question": "1 cm =",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "10-mm",
                "text": "10 mm",
                "correct": true
              },
              {
                "id": "100-mm",
                "text": "100 mm",
                "correct": false
              },
              {
                "id": "1-mm",
                "text": "1 mm",
                "correct": false
              },
              {
                "id": "5-mm",
                "text": "5 mm",
                "correct": false
              }
            ],
            "explanation": "Un centímetro tiene diez milímetros.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t9-mm-1",
            "question": "5 cm =",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "50-mm",
                "text": "50 mm",
                "correct": true
              },
              {
                "id": "15-mm",
                "text": "15 mm",
                "correct": false
              },
              {
                "id": "500-mm",
                "text": "500 mm",
                "correct": false
              },
              {
                "id": "5-mm",
                "text": "5 mm",
                "correct": false
              }
            ],
            "explanation": "5×10=50.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t9-mm-2",
            "question": "30 mm =",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "3-cm",
                "text": "3 cm",
                "correct": true
              },
              {
                "id": "30-cm",
                "text": "30 cm",
                "correct": false
              },
              {
                "id": "300-cm",
                "text": "300 cm",
                "correct": false
              },
              {
                "id": "13-cm",
                "text": "13 cm",
                "correct": false
              }
            ],
            "explanation": "30÷10=3.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t9-mm-3",
            "question": "2 cm y 5 mm =",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "25-mm",
                "text": "25 mm",
                "correct": true
              },
              {
                "id": "7-mm",
                "text": "7 mm",
                "correct": false
              },
              {
                "id": "205-mm",
                "text": "205 mm",
                "correct": false
              },
              {
                "id": "20-mm",
                "text": "20 mm",
                "correct": false
              }
            ],
            "explanation": "2 cm=20 mm; +5=25.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t9-mm-4",
            "question": "100 mm =",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "10-cm",
                "text": "10 cm",
                "correct": true
              },
              {
                "id": "1-cm",
                "text": "1 cm",
                "correct": false
              },
              {
                "id": "100-cm",
                "text": "100 cm",
                "correct": false
              },
              {
                "id": "1-000-cm",
                "text": "1.000 cm",
                "correct": false
              }
            ],
            "explanation": "100÷10=10.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t9-mm-5",
            "question": "¿Qué es menor?",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "1-mm",
                "text": "1 mm",
                "correct": true
              },
              {
                "id": "1-cm",
                "text": "1 cm",
                "correct": false
              },
              {
                "id": "1-m",
                "text": "1 m",
                "correct": false
              },
              {
                "id": "1-km",
                "text": "1 km",
                "correct": false
              }
            ],
            "explanation": "El milímetro es la unidad más pequeña de estas.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t9-mm-6",
            "question": "8 cm =",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "80-mm",
                "text": "80 mm",
                "correct": true
              },
              {
                "id": "18-mm",
                "text": "18 mm",
                "correct": false
              },
              {
                "id": "800-mm",
                "text": "800 mm",
                "correct": false
              },
              {
                "id": "8-mm",
                "text": "8 mm",
                "correct": false
              }
            ],
            "explanation": "8×10=80.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t9-mm-7",
            "question": "Una pieza muy pequeña puede medirse en…",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "mm",
                "text": "mm",
                "correct": true
              },
              {
                "id": "km",
                "text": "km",
                "correct": false
              },
              {
                "id": "l",
                "text": "l",
                "correct": false
              },
              {
                "id": "kg",
                "text": "kg",
                "correct": false
              }
            ],
            "explanation": "El milímetro permite precisión.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          }
        ]
      },
      {
        "id": "problemas",
        "title": "Problemas con unidades de longitud",
        "subtitle": "Convertir y operar con longitudes",
        "kind": "problems",
        "emoji": "🧠",
        "theory": [
          {
            "type": "text",
            "title": "Problemas de longitud",
            "text": "Antes de sumar o restar longitudes, expresa las cantidades en la misma unidad."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "Lee qué unidad usa cada dato.",
              "Convierte si es necesario.",
              "Opera.",
              "Escribe la unidad en la respuesta."
            ]
          },
          {
            "type": "example",
            "title": "Ejemplo",
            "text": "2 m + 50 cm = 200 cm + 50 cm = 250 cm."
          },
          {
            "type": "tip",
            "title": "Truco MathCrack",
            "text": "No sumes 2 m + 50 cm como si fueran 52: primero iguala unidades."
          }
        ],
        "questions": [
          {
            "id": "t9-p-0",
            "question": "Una cuerda mide 2 m y otra 150 cm. ¿Cuántos cm miden juntas?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "350-cm",
                "text": "350 cm",
                "correct": true
              },
              {
                "id": "152-cm",
                "text": "152 cm",
                "correct": false
              },
              {
                "id": "250-cm",
                "text": "250 cm",
                "correct": false
              },
              {
                "id": "3-500-cm",
                "text": "3.500 cm",
                "correct": false
              }
            ],
            "explanation": "2 m=200 cm; 200+150=350.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t9-p-1",
            "question": "Caminas 3 km por la mañana y 2 km por la tarde.",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "5-km",
                "text": "5 km",
                "correct": true
              },
              {
                "id": "1-km",
                "text": "1 km",
                "correct": false
              },
              {
                "id": "6-km",
                "text": "6 km",
                "correct": false
              },
              {
                "id": "500-m",
                "text": "500 m",
                "correct": false
              }
            ],
            "explanation": "3+2=5.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t9-p-2",
            "question": "Una cinta de 100 cm se corta 35 cm. ¿Cuánto queda?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "65-cm",
                "text": "65 cm",
                "correct": true
              },
              {
                "id": "135-cm",
                "text": "135 cm",
                "correct": false
              },
              {
                "id": "75-cm",
                "text": "75 cm",
                "correct": false
              },
              {
                "id": "55-cm",
                "text": "55 cm",
                "correct": false
              }
            ],
            "explanation": "100−35=65.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t9-p-3",
            "question": "Una ruta de 5 km: has recorrido 2 km. ¿Cuánto falta?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "3-km",
                "text": "3 km",
                "correct": true
              },
              {
                "id": "7-km",
                "text": "7 km",
                "correct": false
              },
              {
                "id": "2-5-km",
                "text": "2,5 km",
                "correct": false
              },
              {
                "id": "300-m",
                "text": "300 m",
                "correct": false
              }
            ],
            "explanation": "5−2=3.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t9-p-4",
            "question": "80 mm + 2 cm =",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "100-mm",
                "text": "100 mm",
                "correct": true
              },
              {
                "id": "82-mm",
                "text": "82 mm",
                "correct": false
              },
              {
                "id": "10-mm",
                "text": "10 mm",
                "correct": false
              },
              {
                "id": "800-mm",
                "text": "800 mm",
                "correct": false
              }
            ],
            "explanation": "2 cm=20 mm; 80+20=100.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t9-p-5",
            "question": "4 m − 75 cm =",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "325-cm",
                "text": "325 cm",
                "correct": true
              },
              {
                "id": "3-925-cm",
                "text": "3.925 cm",
                "correct": false
              },
              {
                "id": "475-cm",
                "text": "475 cm",
                "correct": false
              },
              {
                "id": "25-cm",
                "text": "25 cm",
                "correct": false
              }
            ],
            "explanation": "4 m=400 cm; 400−75=325.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t9-p-6",
            "question": "1 km + 500 m =",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "1-500-m",
                "text": "1.500 m",
                "correct": true
              },
              {
                "id": "501-m",
                "text": "501 m",
                "correct": false
              },
              {
                "id": "1-050-m",
                "text": "1.050 m",
                "correct": false
              },
              {
                "id": "15-000-m",
                "text": "15.000 m",
                "correct": false
              }
            ],
            "explanation": "1 km=1.000 m.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t9-p-7",
            "question": "250 cm son…",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "2-m-y-50-cm",
                "text": "2 m y 50 cm",
                "correct": true
              },
              {
                "id": "25-m",
                "text": "25 m",
                "correct": false
              },
              {
                "id": "2-m-y-5-cm",
                "text": "2 m y 5 cm",
                "correct": false
              },
              {
                "id": "250-m",
                "text": "250 m",
                "correct": false
              }
            ],
            "explanation": "200 cm=2 m y sobran 50.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          }
        ]
      },
      {
        "id": "comprueba",
        "title": "Comprueba tu progreso",
        "subtitle": "Ejercicios mezclados de los contenidos trabajados en el tema",
        "kind": "review",
        "emoji": "🏆",
        "theory": [
          {
            "type": "text",
            "title": "Repaso final",
            "text": "Aquí no hay teoría nueva. Resuelve ejercicios de los apartados que has trabajado en este tema."
          },
          {
            "type": "important",
            "title": "Objetivo",
            "text": "Comprobar que sabes aplicar los conocimientos, no memorizar nombres de secciones."
          },
          {
            "type": "tip",
            "title": "Si fallas",
            "text": "Lee la explicación, vuelve al apartado correspondiente y practica de nuevo."
          }
        ],
        "questions": [
          {
            "id": "tema-09-review-cm-m-0",
            "question": "1 m =",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "100-cm",
                "text": "100 cm",
                "correct": true
              },
              {
                "id": "10-cm",
                "text": "10 cm",
                "correct": false
              },
              {
                "id": "1-000-cm",
                "text": "1.000 cm",
                "correct": false
              },
              {
                "id": "50-cm",
                "text": "50 cm",
                "correct": false
              }
            ],
            "explanation": "Un metro contiene 100 centímetros.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "tema-09-review-cm-m-1",
            "question": "2 m =",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "200-cm",
                "text": "200 cm",
                "correct": true
              },
              {
                "id": "20-cm",
                "text": "20 cm",
                "correct": false
              },
              {
                "id": "102-cm",
                "text": "102 cm",
                "correct": false
              },
              {
                "id": "2-000-cm",
                "text": "2.000 cm",
                "correct": false
              }
            ],
            "explanation": "2×100=200.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "tema-09-review-km-0",
            "question": "1 km =",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "1-000-m",
                "text": "1.000 m",
                "correct": true
              },
              {
                "id": "100-m",
                "text": "100 m",
                "correct": false
              },
              {
                "id": "10-000-m",
                "text": "10.000 m",
                "correct": false
              },
              {
                "id": "10-m",
                "text": "10 m",
                "correct": false
              }
            ],
            "explanation": "Un kilómetro son mil metros.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "tema-09-review-km-1",
            "question": "4 km =",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "4-000-m",
                "text": "4.000 m",
                "correct": true
              },
              {
                "id": "400-m",
                "text": "400 m",
                "correct": false
              },
              {
                "id": "40-m",
                "text": "40 m",
                "correct": false
              },
              {
                "id": "4-100-m",
                "text": "4.100 m",
                "correct": false
              }
            ],
            "explanation": "4×1.000.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "tema-09-review-mm-0",
            "question": "1 cm =",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "10-mm",
                "text": "10 mm",
                "correct": true
              },
              {
                "id": "100-mm",
                "text": "100 mm",
                "correct": false
              },
              {
                "id": "1-mm",
                "text": "1 mm",
                "correct": false
              },
              {
                "id": "5-mm",
                "text": "5 mm",
                "correct": false
              }
            ],
            "explanation": "Un centímetro tiene diez milímetros.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "tema-09-review-mm-1",
            "question": "5 cm =",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "50-mm",
                "text": "50 mm",
                "correct": true
              },
              {
                "id": "15-mm",
                "text": "15 mm",
                "correct": false
              },
              {
                "id": "500-mm",
                "text": "500 mm",
                "correct": false
              },
              {
                "id": "5-mm",
                "text": "5 mm",
                "correct": false
              }
            ],
            "explanation": "5×10=50.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "tema-09-review-problemas-0",
            "question": "Una cuerda mide 2 m y otra 150 cm. ¿Cuántos cm miden juntas?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "350-cm",
                "text": "350 cm",
                "correct": true
              },
              {
                "id": "152-cm",
                "text": "152 cm",
                "correct": false
              },
              {
                "id": "250-cm",
                "text": "250 cm",
                "correct": false
              },
              {
                "id": "3-500-cm",
                "text": "3.500 cm",
                "correct": false
              }
            ],
            "explanation": "2 m=200 cm; 200+150=350.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "tema-09-review-problemas-1",
            "question": "Caminas 3 km por la mañana y 2 km por la tarde.",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "5-km",
                "text": "5 km",
                "correct": true
              },
              {
                "id": "1-km",
                "text": "1 km",
                "correct": false
              },
              {
                "id": "6-km",
                "text": "6 km",
                "correct": false
              },
              {
                "id": "500-m",
                "text": "500 m",
                "correct": false
              }
            ],
            "explanation": "3+2=5.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          }
        ]
      }
    ]
  },
  {
    "id": "tema-10",
    "order": 10,
    "title": "La capacidad y la masa",
    "description": "Aprende la teoría, practica con muchos ejercicios y comprueba tu progreso.",
    "emoji": "⚖️",
    "sections": [
      {
        "id": "kg",
        "title": "El kilo, medio kilo y cuarto de kilo",
        "subtitle": "Relacionar kg con medios y cuartos",
        "kind": "measurement",
        "emoji": "⚖️",
        "theory": [
          {
            "type": "text",
            "title": "Kilogramo",
            "text": "El kilogramo mide masa. Un medio kilo es la mitad de 1 kg y un cuarto de kilo es una de cuatro partes iguales."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "1 kg = 1.000 g",
              "1/2 kg = 500 g",
              "1/4 kg = 250 g",
              "2 medios kilos = 1 kg"
            ]
          },
          {
            "type": "example",
            "title": "Ejemplo",
            "text": "4 cuartos de kilo = 1 kg."
          },
          {
            "type": "tip",
            "title": "Truco MathCrack",
            "text": "Piensa en 1.000 g y divide entre 2 o 4."
          }
        ],
        "questions": [
          {
            "id": "t10-kg-0",
            "question": "1 kg =",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "1-000-g",
                "text": "1.000 g",
                "correct": true
              },
              {
                "id": "100-g",
                "text": "100 g",
                "correct": false
              },
              {
                "id": "10-000-g",
                "text": "10.000 g",
                "correct": false
              },
              {
                "id": "500-g",
                "text": "500 g",
                "correct": false
              }
            ],
            "explanation": "Un kilogramo tiene mil gramos.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t10-kg-1",
            "question": "Medio kilo =",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "500-g",
                "text": "500 g",
                "correct": true
              },
              {
                "id": "250-g",
                "text": "250 g",
                "correct": false
              },
              {
                "id": "100-g",
                "text": "100 g",
                "correct": false
              },
              {
                "id": "750-g",
                "text": "750 g",
                "correct": false
              }
            ],
            "explanation": "1.000÷2=500.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t10-kg-2",
            "question": "Cuarto de kilo =",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "250-g",
                "text": "250 g",
                "correct": true
              },
              {
                "id": "500-g",
                "text": "500 g",
                "correct": false
              },
              {
                "id": "100-g",
                "text": "100 g",
                "correct": false
              },
              {
                "id": "400-g",
                "text": "400 g",
                "correct": false
              }
            ],
            "explanation": "1.000÷4=250.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t10-kg-3",
            "question": "2 medios kilos =",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "1-kg",
                "text": "1 kg",
                "correct": true
              },
              {
                "id": "2-kg",
                "text": "2 kg",
                "correct": false
              },
              {
                "id": "500-g",
                "text": "500 g",
                "correct": false
              },
              {
                "id": "250-g",
                "text": "250 g",
                "correct": false
              }
            ],
            "explanation": "Dos mitades forman la unidad.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t10-kg-4",
            "question": "4 cuartos de kilo =",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "1-kg",
                "text": "1 kg",
                "correct": true
              },
              {
                "id": "4-kg",
                "text": "4 kg",
                "correct": false
              },
              {
                "id": "500-g",
                "text": "500 g",
                "correct": false
              },
              {
                "id": "250-g",
                "text": "250 g",
                "correct": false
              }
            ],
            "explanation": "Cuatro cuartos forman uno.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t10-kg-5",
            "question": "3 cuartos de kilo =",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "750-g",
                "text": "750 g",
                "correct": true
              },
              {
                "id": "300-g",
                "text": "300 g",
                "correct": false
              },
              {
                "id": "500-g",
                "text": "500 g",
                "correct": false
              },
              {
                "id": "1-250-g",
                "text": "1.250 g",
                "correct": false
              }
            ],
            "explanation": "3×250=750.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t10-kg-6",
            "question": "2 kg =",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "2-000-g",
                "text": "2.000 g",
                "correct": true
              },
              {
                "id": "200-g",
                "text": "200 g",
                "correct": false
              },
              {
                "id": "1-200-g",
                "text": "1.200 g",
                "correct": false
              },
              {
                "id": "20-000-g",
                "text": "20.000 g",
                "correct": false
              }
            ],
            "explanation": "2×1.000.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t10-kg-7",
            "question": "1 kg y medio =",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "1-500-g",
                "text": "1.500 g",
                "correct": true
              },
              {
                "id": "1-050-g",
                "text": "1.050 g",
                "correct": false
              },
              {
                "id": "500-g",
                "text": "500 g",
                "correct": false
              },
              {
                "id": "2-500-g",
                "text": "2.500 g",
                "correct": false
              }
            ],
            "explanation": "1.000+500=1.500.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          }
        ]
      },
      {
        "id": "g",
        "title": "El gramo",
        "subtitle": "Medir masas pequeñas",
        "kind": "measurement",
        "emoji": "🥣",
        "theory": [
          {
            "type": "text",
            "title": "Gramo",
            "text": "El gramo es una unidad menor que el kilogramo y se usa para masas pequeñas."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "1 kg = 1.000 g",
              "Una tableta de chocolate puede expresarse en g.",
              "Para sumar masas, usa la misma unidad.",
              "La balanza sirve para medir masa."
            ]
          },
          {
            "type": "example",
            "title": "Ejemplo",
            "text": "750 g + 250 g = 1.000 g = 1 kg."
          },
          {
            "type": "tip",
            "title": "Truco MathCrack",
            "text": "Busca completar 1.000 g."
          }
        ],
        "questions": [
          {
            "id": "t10-g-0",
            "question": "500 g + 500 g =",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "1-kg",
                "text": "1 kg",
                "correct": true
              },
              {
                "id": "500-kg",
                "text": "500 kg",
                "correct": false
              },
              {
                "id": "100-g",
                "text": "100 g",
                "correct": false
              },
              {
                "id": "2-kg",
                "text": "2 kg",
                "correct": false
              }
            ],
            "explanation": "1.000 g=1 kg.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t10-g-1",
            "question": "750 g + 250 g =",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "1-kg",
                "text": "1 kg",
                "correct": true
              },
              {
                "id": "750-kg",
                "text": "750 kg",
                "correct": false
              },
              {
                "id": "500-g",
                "text": "500 g",
                "correct": false
              },
              {
                "id": "2-kg",
                "text": "2 kg",
                "correct": false
              }
            ],
            "explanation": "Suman 1.000 g.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t10-g-2",
            "question": "1.200 g =",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "1-kg-y-200-g",
                "text": "1 kg y 200 g",
                "correct": true
              },
              {
                "id": "12-kg",
                "text": "12 kg",
                "correct": false
              },
              {
                "id": "1-kg-y-20-g",
                "text": "1 kg y 20 g",
                "correct": false
              },
              {
                "id": "200-kg",
                "text": "200 kg",
                "correct": false
              }
            ],
            "explanation": "1.000 g + 200 g.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t10-g-3",
            "question": "¿Qué pesa probablemente unos gramos?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "una-goma-de-borrar",
                "text": "una goma de borrar",
                "correct": true
              },
              {
                "id": "un-coche",
                "text": "un coche",
                "correct": false
              },
              {
                "id": "una-casa",
                "text": "una casa",
                "correct": false
              },
              {
                "id": "una-carretera",
                "text": "una carretera",
                "correct": false
              }
            ],
            "explanation": "Es un objeto pequeño.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t10-g-4",
            "question": "2.500 g =",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "2-kg-y-500-g",
                "text": "2 kg y 500 g",
                "correct": true
              },
              {
                "id": "25-kg",
                "text": "25 kg",
                "correct": false
              },
              {
                "id": "2-kg-y-50-g",
                "text": "2 kg y 50 g",
                "correct": false
              },
              {
                "id": "250-kg",
                "text": "250 kg",
                "correct": false
              }
            ],
            "explanation": "2.000+500.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t10-g-5",
            "question": "300 g + 400 g =",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "700-g",
                "text": "700 g",
                "correct": true
              },
              {
                "id": "7-kg",
                "text": "7 kg",
                "correct": false
              },
              {
                "id": "100-g",
                "text": "100 g",
                "correct": false
              },
              {
                "id": "1-200-g",
                "text": "1.200 g",
                "correct": false
              }
            ],
            "explanation": "300+400=700.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t10-g-6",
            "question": "900 g + 100 g =",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "1-kg",
                "text": "1 kg",
                "correct": true
              },
              {
                "id": "10-kg",
                "text": "10 kg",
                "correct": false
              },
              {
                "id": "100-g",
                "text": "100 g",
                "correct": false
              },
              {
                "id": "900-kg",
                "text": "900 kg",
                "correct": false
              }
            ],
            "explanation": "Completan 1.000 g.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t10-g-7",
            "question": "¿Qué instrumento mide masa?",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "balanza",
                "text": "balanza",
                "correct": true
              },
              {
                "id": "reloj",
                "text": "reloj",
                "correct": false
              },
              {
                "id": "regla",
                "text": "regla",
                "correct": false
              },
              {
                "id": "transportador",
                "text": "transportador",
                "correct": false
              }
            ],
            "explanation": "La balanza mide masa.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          }
        ]
      },
      {
        "id": "litro",
        "title": "El litro, medio litro y cuarto de litro",
        "subtitle": "Relacionar litro con fracciones sencillas",
        "kind": "measurement",
        "emoji": "🥛",
        "theory": [
          {
            "type": "text",
            "title": "Litro",
            "text": "El litro mide capacidad. Medio litro es la mitad y un cuarto de litro es una de cuatro partes iguales."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "1 l = 2 medios litros",
              "1 l = 4 cuartos de litro",
              "1/2 l = 500 ml",
              "1/4 l = 250 ml"
            ]
          },
          {
            "type": "example",
            "title": "Ejemplo",
            "text": "Dos botellas de medio litro contienen 1 litro."
          },
          {
            "type": "tip",
            "title": "Truco MathCrack",
            "text": "Como en el kilo, piensa en mitades y cuartos."
          }
        ],
        "questions": [
          {
            "id": "t10-l-0",
            "question": "2 medios litros =",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "1-l",
                "text": "1 l",
                "correct": true
              },
              {
                "id": "2-l",
                "text": "2 l",
                "correct": false
              },
              {
                "id": "500-ml",
                "text": "500 ml",
                "correct": false
              },
              {
                "id": "250-ml",
                "text": "250 ml",
                "correct": false
              }
            ],
            "explanation": "Dos mitades forman uno.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t10-l-1",
            "question": "4 cuartos de litro =",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "1-l",
                "text": "1 l",
                "correct": true
              },
              {
                "id": "4-l",
                "text": "4 l",
                "correct": false
              },
              {
                "id": "2-l",
                "text": "2 l",
                "correct": false
              },
              {
                "id": "500-ml",
                "text": "500 ml",
                "correct": false
              }
            ],
            "explanation": "Cuatro cuartos forman uno.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t10-l-2",
            "question": "Medio litro =",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "500-ml",
                "text": "500 ml",
                "correct": true
              },
              {
                "id": "250-ml",
                "text": "250 ml",
                "correct": false
              },
              {
                "id": "100-ml",
                "text": "100 ml",
                "correct": false
              },
              {
                "id": "750-ml",
                "text": "750 ml",
                "correct": false
              }
            ],
            "explanation": "La mitad de 1.000 ml.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t10-l-3",
            "question": "Cuarto de litro =",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "250-ml",
                "text": "250 ml",
                "correct": true
              },
              {
                "id": "500-ml",
                "text": "500 ml",
                "correct": false
              },
              {
                "id": "100-ml",
                "text": "100 ml",
                "correct": false
              },
              {
                "id": "400-ml",
                "text": "400 ml",
                "correct": false
              }
            ],
            "explanation": "1.000÷4=250.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t10-l-4",
            "question": "3 cuartos de litro =",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "750-ml",
                "text": "750 ml",
                "correct": true
              },
              {
                "id": "300-ml",
                "text": "300 ml",
                "correct": false
              },
              {
                "id": "500-ml",
                "text": "500 ml",
                "correct": false
              },
              {
                "id": "1-250-ml",
                "text": "1.250 ml",
                "correct": false
              }
            ],
            "explanation": "3×250=750.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t10-l-5",
            "question": "1 l y medio =",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "1-500-ml",
                "text": "1.500 ml",
                "correct": true
              },
              {
                "id": "1-050-ml",
                "text": "1.050 ml",
                "correct": false
              },
              {
                "id": "500-ml",
                "text": "500 ml",
                "correct": false
              },
              {
                "id": "2-500-ml",
                "text": "2.500 ml",
                "correct": false
              }
            ],
            "explanation": "1.000+500.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t10-l-6",
            "question": "¿Qué unidad usarías para una botella grande de agua?",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "litro",
                "text": "litro",
                "correct": true
              },
              {
                "id": "kilogramo",
                "text": "kilogramo",
                "correct": false
              },
              {
                "id": "kil-metro",
                "text": "kilómetro",
                "correct": false
              },
              {
                "id": "hora",
                "text": "hora",
                "correct": false
              }
            ],
            "explanation": "Mide capacidad.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t10-l-7",
            "question": "2 l =",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "2-000-ml",
                "text": "2.000 ml",
                "correct": true
              },
              {
                "id": "200-ml",
                "text": "200 ml",
                "correct": false
              },
              {
                "id": "20-000-ml",
                "text": "20.000 ml",
                "correct": false
              },
              {
                "id": "1-200-ml",
                "text": "1.200 ml",
                "correct": false
              }
            ],
            "explanation": "2×1.000.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          }
        ]
      },
      {
        "id": "ml",
        "title": "El mililitro",
        "subtitle": "Medir capacidades pequeñas",
        "kind": "measurement",
        "emoji": "💧",
        "theory": [
          {
            "type": "text",
            "title": "Mililitro",
            "text": "El mililitro es una unidad pequeña de capacidad."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "1 l = 1.000 ml",
              "500 ml = medio litro",
              "250 ml = cuarto de litro",
              "Se usa en recipientes pequeños."
            ]
          },
          {
            "type": "example",
            "title": "Ejemplo",
            "text": "750 ml + 250 ml = 1.000 ml = 1 l."
          },
          {
            "type": "tip",
            "title": "Truco MathCrack",
            "text": "Completar 1.000 ayuda a convertir a litros."
          }
        ],
        "questions": [
          {
            "id": "t10-ml-0",
            "question": "1 l =",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "1-000-ml",
                "text": "1.000 ml",
                "correct": true
              },
              {
                "id": "100-ml",
                "text": "100 ml",
                "correct": false
              },
              {
                "id": "10-000-ml",
                "text": "10.000 ml",
                "correct": false
              },
              {
                "id": "500-ml",
                "text": "500 ml",
                "correct": false
              }
            ],
            "explanation": "Un litro contiene mil mililitros.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t10-ml-1",
            "question": "300 ml + 200 ml =",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "500-ml",
                "text": "500 ml",
                "correct": true
              },
              {
                "id": "5-l",
                "text": "5 l",
                "correct": false
              },
              {
                "id": "100-ml",
                "text": "100 ml",
                "correct": false
              },
              {
                "id": "1-500-ml",
                "text": "1.500 ml",
                "correct": false
              }
            ],
            "explanation": "300+200=500.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t10-ml-2",
            "question": "800 ml + 200 ml =",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "1-l",
                "text": "1 l",
                "correct": true
              },
              {
                "id": "10-l",
                "text": "10 l",
                "correct": false
              },
              {
                "id": "800-l",
                "text": "800 l",
                "correct": false
              },
              {
                "id": "100-ml",
                "text": "100 ml",
                "correct": false
              }
            ],
            "explanation": "Suman 1.000 ml.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t10-ml-3",
            "question": "1.250 ml =",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "1-l-y-250-ml",
                "text": "1 l y 250 ml",
                "correct": true
              },
              {
                "id": "12-l",
                "text": "12 l",
                "correct": false
              },
              {
                "id": "1-l-y-25-ml",
                "text": "1 l y 25 ml",
                "correct": false
              },
              {
                "id": "250-l",
                "text": "250 l",
                "correct": false
              }
            ],
            "explanation": "1.000+250.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t10-ml-4",
            "question": "2.500 ml =",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "2-l-y-500-ml",
                "text": "2 l y 500 ml",
                "correct": true
              },
              {
                "id": "25-l",
                "text": "25 l",
                "correct": false
              },
              {
                "id": "2-l-y-50-ml",
                "text": "2 l y 50 ml",
                "correct": false
              },
              {
                "id": "250-l",
                "text": "250 l",
                "correct": false
              }
            ],
            "explanation": "2.000+500.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t10-ml-5",
            "question": "¿Qué es menor?",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "1-ml",
                "text": "1 ml",
                "correct": true
              },
              {
                "id": "1-l",
                "text": "1 l",
                "correct": false
              },
              {
                "id": "2-l",
                "text": "2 l",
                "correct": false
              },
              {
                "id": "500-ml",
                "text": "500 ml",
                "correct": false
              }
            ],
            "explanation": "El mililitro es pequeño.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t10-ml-6",
            "question": "750 ml son…",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "3-cuartos-de-litro",
                "text": "3 cuartos de litro",
                "correct": true
              },
              {
                "id": "medio-litro",
                "text": "medio litro",
                "correct": false
              },
              {
                "id": "1-litro",
                "text": "1 litro",
                "correct": false
              },
              {
                "id": "2-litros",
                "text": "2 litros",
                "correct": false
              }
            ],
            "explanation": "3×250=750.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t10-ml-7",
            "question": "500 ml son…",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "medio-litro",
                "text": "medio litro",
                "correct": true
              },
              {
                "id": "un-cuarto",
                "text": "un cuarto",
                "correct": false
              },
              {
                "id": "2-litros",
                "text": "2 litros",
                "correct": false
              },
              {
                "id": "1-litro",
                "text": "1 litro",
                "correct": false
              }
            ],
            "explanation": "Es la mitad de 1.000.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          }
        ]
      },
      {
        "id": "problemas",
        "title": "Problemas con masa y capacidad",
        "subtitle": "Elegir unidades, convertir y operar",
        "kind": "problems",
        "emoji": "🧠",
        "theory": [
          {
            "type": "text",
            "title": "Resolver problemas de medida",
            "text": "Iguala las unidades antes de operar y decide si el problema habla de masa o de capacidad."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "kg y g miden masa.",
              "l y ml miden capacidad.",
              "Convierte antes de sumar/restar.",
              "Comprueba que la unidad final tenga sentido."
            ]
          },
          {
            "type": "example",
            "title": "Ejemplo",
            "text": "1 kg + 500 g = 1.500 g."
          },
          {
            "type": "tip",
            "title": "Truco MathCrack",
            "text": "No mezcles gramos con mililitros: miden magnitudes distintas."
          }
        ],
        "questions": [
          {
            "id": "t10-p-0",
            "question": "Compras 1 kg de manzanas y 500 g de peras. Masa total:",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "1-500-g",
                "text": "1.500 g",
                "correct": true
              },
              {
                "id": "501-g",
                "text": "501 g",
                "correct": false
              },
              {
                "id": "1-050-g",
                "text": "1.050 g",
                "correct": false
              },
              {
                "id": "2-000-g",
                "text": "2.000 g",
                "correct": false
              }
            ],
            "explanation": "1 kg=1.000 g; +500.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t10-p-1",
            "question": "Una jarra tiene 1 l y añades 250 ml.",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "1-250-ml",
                "text": "1.250 ml",
                "correct": true
              },
              {
                "id": "251-ml",
                "text": "251 ml",
                "correct": false
              },
              {
                "id": "1-025-ml",
                "text": "1.025 ml",
                "correct": false
              },
              {
                "id": "750-ml",
                "text": "750 ml",
                "correct": false
              }
            ],
            "explanation": "1.000+250.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t10-p-2",
            "question": "De 2 kg de harina usas 750 g. Quedan…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "1-250-g",
                "text": "1.250 g",
                "correct": true
              },
              {
                "id": "1-750-g",
                "text": "1.750 g",
                "correct": false
              },
              {
                "id": "750-g",
                "text": "750 g",
                "correct": false
              },
              {
                "id": "2-750-g",
                "text": "2.750 g",
                "correct": false
              }
            ],
            "explanation": "2.000−750=1.250.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t10-p-3",
            "question": "De 1 l bebes 300 ml. Quedan…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "700-ml",
                "text": "700 ml",
                "correct": true
              },
              {
                "id": "1-300-ml",
                "text": "1.300 ml",
                "correct": false
              },
              {
                "id": "300-ml",
                "text": "300 ml",
                "correct": false
              },
              {
                "id": "70-ml",
                "text": "70 ml",
                "correct": false
              }
            ],
            "explanation": "1.000−300=700.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t10-p-4",
            "question": "4 paquetes de 250 g pesan…",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "1-kg",
                "text": "1 kg",
                "correct": true
              },
              {
                "id": "250-g",
                "text": "250 g",
                "correct": false
              },
              {
                "id": "4-kg",
                "text": "4 kg",
                "correct": false
              },
              {
                "id": "500-g",
                "text": "500 g",
                "correct": false
              }
            ],
            "explanation": "4×250=1.000 g.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t10-p-5",
            "question": "2 botellas de 500 ml contienen…",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "1-l",
                "text": "1 l",
                "correct": true
              },
              {
                "id": "500-ml",
                "text": "500 ml",
                "correct": false
              },
              {
                "id": "2-l",
                "text": "2 l",
                "correct": false
              },
              {
                "id": "250-ml",
                "text": "250 ml",
                "correct": false
              }
            ],
            "explanation": "2×500=1.000 ml.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t10-p-6",
            "question": "3 bolsas de 500 g pesan…",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "1-500-g",
                "text": "1.500 g",
                "correct": true
              },
              {
                "id": "500-g",
                "text": "500 g",
                "correct": false
              },
              {
                "id": "3-000-g",
                "text": "3.000 g",
                "correct": false
              },
              {
                "id": "1-050-g",
                "text": "1.050 g",
                "correct": false
              }
            ],
            "explanation": "3×500=1.500.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t10-p-7",
            "question": "4 vasos de 250 ml contienen…",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "1-l",
                "text": "1 l",
                "correct": true
              },
              {
                "id": "250-ml",
                "text": "250 ml",
                "correct": false
              },
              {
                "id": "2-l",
                "text": "2 l",
                "correct": false
              },
              {
                "id": "500-ml",
                "text": "500 ml",
                "correct": false
              }
            ],
            "explanation": "4×250=1.000.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          }
        ]
      },
      {
        "id": "comprueba",
        "title": "Comprueba tu progreso",
        "subtitle": "Ejercicios mezclados de los contenidos trabajados en el tema",
        "kind": "review",
        "emoji": "🏆",
        "theory": [
          {
            "type": "text",
            "title": "Repaso final",
            "text": "Aquí no hay teoría nueva. Resuelve ejercicios de los apartados que has trabajado en este tema."
          },
          {
            "type": "important",
            "title": "Objetivo",
            "text": "Comprobar que sabes aplicar los conocimientos, no memorizar nombres de secciones."
          },
          {
            "type": "tip",
            "title": "Si fallas",
            "text": "Lee la explicación, vuelve al apartado correspondiente y practica de nuevo."
          }
        ],
        "questions": [
          {
            "id": "tema-10-review-kg-0",
            "question": "1 kg =",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "1-000-g",
                "text": "1.000 g",
                "correct": true
              },
              {
                "id": "100-g",
                "text": "100 g",
                "correct": false
              },
              {
                "id": "10-000-g",
                "text": "10.000 g",
                "correct": false
              },
              {
                "id": "500-g",
                "text": "500 g",
                "correct": false
              }
            ],
            "explanation": "Un kilogramo tiene mil gramos.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "tema-10-review-kg-1",
            "question": "Medio kilo =",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "500-g",
                "text": "500 g",
                "correct": true
              },
              {
                "id": "250-g",
                "text": "250 g",
                "correct": false
              },
              {
                "id": "100-g",
                "text": "100 g",
                "correct": false
              },
              {
                "id": "750-g",
                "text": "750 g",
                "correct": false
              }
            ],
            "explanation": "1.000÷2=500.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "tema-10-review-g-0",
            "question": "500 g + 500 g =",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "1-kg",
                "text": "1 kg",
                "correct": true
              },
              {
                "id": "500-kg",
                "text": "500 kg",
                "correct": false
              },
              {
                "id": "100-g",
                "text": "100 g",
                "correct": false
              },
              {
                "id": "2-kg",
                "text": "2 kg",
                "correct": false
              }
            ],
            "explanation": "1.000 g=1 kg.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "tema-10-review-g-1",
            "question": "750 g + 250 g =",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "1-kg",
                "text": "1 kg",
                "correct": true
              },
              {
                "id": "750-kg",
                "text": "750 kg",
                "correct": false
              },
              {
                "id": "500-g",
                "text": "500 g",
                "correct": false
              },
              {
                "id": "2-kg",
                "text": "2 kg",
                "correct": false
              }
            ],
            "explanation": "Suman 1.000 g.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "tema-10-review-litro-0",
            "question": "2 medios litros =",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "1-l",
                "text": "1 l",
                "correct": true
              },
              {
                "id": "2-l",
                "text": "2 l",
                "correct": false
              },
              {
                "id": "500-ml",
                "text": "500 ml",
                "correct": false
              },
              {
                "id": "250-ml",
                "text": "250 ml",
                "correct": false
              }
            ],
            "explanation": "Dos mitades forman uno.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "tema-10-review-litro-1",
            "question": "4 cuartos de litro =",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "1-l",
                "text": "1 l",
                "correct": true
              },
              {
                "id": "4-l",
                "text": "4 l",
                "correct": false
              },
              {
                "id": "2-l",
                "text": "2 l",
                "correct": false
              },
              {
                "id": "500-ml",
                "text": "500 ml",
                "correct": false
              }
            ],
            "explanation": "Cuatro cuartos forman uno.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "tema-10-review-ml-0",
            "question": "1 l =",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "1-000-ml",
                "text": "1.000 ml",
                "correct": true
              },
              {
                "id": "100-ml",
                "text": "100 ml",
                "correct": false
              },
              {
                "id": "10-000-ml",
                "text": "10.000 ml",
                "correct": false
              },
              {
                "id": "500-ml",
                "text": "500 ml",
                "correct": false
              }
            ],
            "explanation": "Un litro contiene mil mililitros.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "tema-10-review-ml-1",
            "question": "300 ml + 200 ml =",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "500-ml",
                "text": "500 ml",
                "correct": true
              },
              {
                "id": "5-l",
                "text": "5 l",
                "correct": false
              },
              {
                "id": "100-ml",
                "text": "100 ml",
                "correct": false
              },
              {
                "id": "1-500-ml",
                "text": "1.500 ml",
                "correct": false
              }
            ],
            "explanation": "300+200=500.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "tema-10-review-problemas-0",
            "question": "Compras 1 kg de manzanas y 500 g de peras. Masa total:",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "1-500-g",
                "text": "1.500 g",
                "correct": true
              },
              {
                "id": "501-g",
                "text": "501 g",
                "correct": false
              },
              {
                "id": "1-050-g",
                "text": "1.050 g",
                "correct": false
              },
              {
                "id": "2-000-g",
                "text": "2.000 g",
                "correct": false
              }
            ],
            "explanation": "1 kg=1.000 g; +500.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "tema-10-review-problemas-1",
            "question": "Una jarra tiene 1 l y añades 250 ml.",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "1-250-ml",
                "text": "1.250 ml",
                "correct": true
              },
              {
                "id": "251-ml",
                "text": "251 ml",
                "correct": false
              },
              {
                "id": "1-025-ml",
                "text": "1.025 ml",
                "correct": false
              },
              {
                "id": "750-ml",
                "text": "750 ml",
                "correct": false
              }
            ],
            "explanation": "1.000+250.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          }
        ]
      }
    ]
  },
  {
    "id": "tema-11",
    "order": 11,
    "title": "El tiempo y el dinero",
    "description": "Aprende la teoría, practica con muchos ejercicios y comprueba tu progreso.",
    "emoji": "🕒",
    "sections": [
      {
        "id": "reloj-agujas",
        "title": "El reloj de agujas",
        "subtitle": "Leer horas en un reloj analógico",
        "kind": "measurement",
        "emoji": "🕒",
        "theory": [
          {
            "type": "text",
            "title": "Reloj analógico",
            "text": "La aguja corta indica las horas y la larga los minutos."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "Aguja larga en 12: en punto.",
              "Aguja larga en 6: y media.",
              "Cada número representa 5 minutos para la aguja larga.",
              "Un cuarto de hora son 15 minutos."
            ]
          },
          {
            "type": "example",
            "title": "Ejemplo",
            "text": "Aguja corta en 3 y larga en 12: las 3 en punto."
          },
          {
            "type": "tip",
            "title": "Truco MathCrack",
            "text": "Mira primero la aguja larga para los minutos."
          }
        ],
        "questions": [
          {
            "id": "t11-ra-0",
            "question": "Un cuarto de hora son…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "15-min",
                "text": "15 min",
                "correct": true
              },
              {
                "id": "10-min",
                "text": "10 min",
                "correct": false
              },
              {
                "id": "20-min",
                "text": "20 min",
                "correct": false
              },
              {
                "id": "30-min",
                "text": "30 min",
                "correct": false
              }
            ],
            "explanation": "60÷4=15.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t11-ra-1",
            "question": "Media hora son…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "30-min",
                "text": "30 min",
                "correct": true
              },
              {
                "id": "15-min",
                "text": "15 min",
                "correct": false
              },
              {
                "id": "20-min",
                "text": "20 min",
                "correct": false
              },
              {
                "id": "60-min",
                "text": "60 min",
                "correct": false
              }
            ],
            "explanation": "La mitad de 60.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t11-ra-2",
            "question": "La aguja corta indica…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "las-horas",
                "text": "las horas",
                "correct": true
              },
              {
                "id": "los-minutos",
                "text": "los minutos",
                "correct": false
              },
              {
                "id": "los-segundos-siempre",
                "text": "los segundos siempre",
                "correct": false
              },
              {
                "id": "el-d-a",
                "text": "el día",
                "correct": false
              }
            ],
            "explanation": "La corta marca horas.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t11-ra-3",
            "question": "La aguja larga indica…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "los-minutos",
                "text": "los minutos",
                "correct": true
              },
              {
                "id": "las-horas",
                "text": "las horas",
                "correct": false
              },
              {
                "id": "el-mes",
                "text": "el mes",
                "correct": false
              },
              {
                "id": "el-a-o",
                "text": "el año",
                "correct": false
              }
            ],
            "explanation": "La larga recorre los minutos.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t11-ra-4",
            "question": "Aguja larga en 12 significa…",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "en-punto",
                "text": "en punto",
                "correct": true
              },
              {
                "id": "y-media",
                "text": "y media",
                "correct": false
              },
              {
                "id": "y-cuarto",
                "text": "y cuarto",
                "correct": false
              },
              {
                "id": "menos-cuarto",
                "text": "menos cuarto",
                "correct": false
              }
            ],
            "explanation": "Han pasado 0 minutos de esa hora.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t11-ra-5",
            "question": "Aguja larga en 6 significa…",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "y-media",
                "text": "y media",
                "correct": true
              },
              {
                "id": "en-punto",
                "text": "en punto",
                "correct": false
              },
              {
                "id": "y-cuarto",
                "text": "y cuarto",
                "correct": false
              },
              {
                "id": "menos-cinco",
                "text": "menos cinco",
                "correct": false
              }
            ],
            "explanation": "Han pasado 30 minutos.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t11-ra-6",
            "question": "Aguja larga en 3 indica…",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "15-minutos",
                "text": "15 minutos",
                "correct": true
              },
              {
                "id": "30",
                "text": "30",
                "correct": false
              },
              {
                "id": "45",
                "text": "45",
                "correct": false
              },
              {
                "id": "5",
                "text": "5",
                "correct": false
              }
            ],
            "explanation": "3×5=15.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t11-ra-7",
            "question": "Aguja larga en 9 indica…",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "45-minutos",
                "text": "45 minutos",
                "correct": true
              },
              {
                "id": "15",
                "text": "15",
                "correct": false
              },
              {
                "id": "30",
                "text": "30",
                "correct": false
              },
              {
                "id": "50",
                "text": "50",
                "correct": false
              }
            ],
            "explanation": "9×5=45.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          }
        ]
      },
      {
        "id": "reloj-digital",
        "title": "El reloj digital",
        "subtitle": "Interpretar horas y minutos en formato digital",
        "kind": "measurement",
        "emoji": "⏰",
        "theory": [
          {
            "type": "text",
            "title": "Reloj digital",
            "text": "En un reloj digital, las cifras antes de los dos puntos indican horas y las posteriores indican minutos."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "08:00 = ocho en punto",
              "14:30 = dos y media de la tarde",
              "09:15 = nueve y cuarto",
              "18:45 = siete menos cuarto de la tarde"
            ]
          },
          {
            "type": "example",
            "title": "Ejemplo",
            "text": "16:20 indica las cuatro y veinte de la tarde."
          },
          {
            "type": "tip",
            "title": "Truco MathCrack",
            "text": "En formato de 24 horas, después de 12:00 seguimos 13, 14, 15…"
          }
        ],
        "questions": [
          {
            "id": "t11-rd-0",
            "question": "08:30 es…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "ocho-y-media",
                "text": "ocho y media",
                "correct": true
              },
              {
                "id": "ocho-en-punto",
                "text": "ocho en punto",
                "correct": false
              },
              {
                "id": "nueve-y-media",
                "text": "nueve y media",
                "correct": false
              },
              {
                "id": "ocho-y-cuarto",
                "text": "ocho y cuarto",
                "correct": false
              }
            ],
            "explanation": "30 minutos = media hora.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t11-rd-1",
            "question": "09:15 es…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "nueve-y-cuarto",
                "text": "nueve y cuarto",
                "correct": true
              },
              {
                "id": "nueve-y-media",
                "text": "nueve y media",
                "correct": false
              },
              {
                "id": "diez-menos-cuarto",
                "text": "diez menos cuarto",
                "correct": false
              },
              {
                "id": "nueve-en-punto",
                "text": "nueve en punto",
                "correct": false
              }
            ],
            "explanation": "15 minutos = un cuarto.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t11-rd-2",
            "question": "14:00 es…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "dos-de-la-tarde",
                "text": "dos de la tarde",
                "correct": true
              },
              {
                "id": "cuatro-de-la-tarde",
                "text": "cuatro de la tarde",
                "correct": false
              },
              {
                "id": "doce",
                "text": "doce",
                "correct": false
              },
              {
                "id": "dos-de-la-ma-ana",
                "text": "dos de la mañana",
                "correct": false
              }
            ],
            "explanation": "14−12=2.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t11-rd-3",
            "question": "18:30 es…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "seis-y-media-de-la-tarde",
                "text": "seis y media de la tarde",
                "correct": true
              },
              {
                "id": "ocho-y-media",
                "text": "ocho y media",
                "correct": false
              },
              {
                "id": "seis-en-punto",
                "text": "seis en punto",
                "correct": false
              },
              {
                "id": "cinco-y-media",
                "text": "cinco y media",
                "correct": false
              }
            ],
            "explanation": "18−12=6.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t11-rd-4",
            "question": "23:00 es…",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "once-de-la-noche",
                "text": "once de la noche",
                "correct": true
              },
              {
                "id": "una-de-la-tarde",
                "text": "una de la tarde",
                "correct": false
              },
              {
                "id": "doce",
                "text": "doce",
                "correct": false
              },
              {
                "id": "nueve",
                "text": "nueve",
                "correct": false
              }
            ],
            "explanation": "23−12=11.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t11-rd-5",
            "question": "07:45 es…",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "ocho-menos-cuarto",
                "text": "ocho menos cuarto",
                "correct": true
              },
              {
                "id": "siete-y-cuarto",
                "text": "siete y cuarto",
                "correct": false
              },
              {
                "id": "siete-y-media",
                "text": "siete y media",
                "correct": false
              },
              {
                "id": "ocho-y-cuarto",
                "text": "ocho y cuarto",
                "correct": false
              }
            ],
            "explanation": "Faltan 15 minutos para las 8.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t11-rd-6",
            "question": "12:00 es…",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "doce-en-punto",
                "text": "doce en punto",
                "correct": true
              },
              {
                "id": "una",
                "text": "una",
                "correct": false
              },
              {
                "id": "once",
                "text": "once",
                "correct": false
              },
              {
                "id": "doce-y-media",
                "text": "doce y media",
                "correct": false
              }
            ],
            "explanation": "00 minutos.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t11-rd-7",
            "question": "16:20 es…",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "cuatro-y-veinte-de-la-tarde",
                "text": "cuatro y veinte de la tarde",
                "correct": true
              },
              {
                "id": "seis-y-veinte",
                "text": "seis y veinte",
                "correct": false
              },
              {
                "id": "cuatro-menos-veinte",
                "text": "cuatro menos veinte",
                "correct": false
              },
              {
                "id": "cinco-y-veinte",
                "text": "cinco y veinte",
                "correct": false
              }
            ],
            "explanation": "16−12=4.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          }
        ]
      },
      {
        "id": "horas-minutos",
        "title": "Equivalencia entre horas y minutos",
        "subtitle": "Convertir horas y minutos",
        "kind": "measurement",
        "emoji": "⏱️",
        "theory": [
          {
            "type": "text",
            "title": "Horas y minutos",
            "text": "Una hora tiene 60 minutos. Podemos convertir horas a minutos multiplicando por 60."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "1 h = 60 min",
              "2 h = 120 min",
              "1 h 30 min = 90 min",
              "3 h = 180 min"
            ]
          },
          {
            "type": "example",
            "title": "Ejemplo",
            "text": "2 h 15 min = 120 + 15 = 135 min."
          },
          {
            "type": "tip",
            "title": "Truco MathCrack",
            "text": "Convierte primero las horas y después suma los minutos sueltos."
          }
        ],
        "questions": [
          {
            "id": "t11-hm-0",
            "question": "1 h =",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "60-min",
                "text": "60 min",
                "correct": true
              },
              {
                "id": "100-min",
                "text": "100 min",
                "correct": false
              },
              {
                "id": "30-min",
                "text": "30 min",
                "correct": false
              },
              {
                "id": "24-min",
                "text": "24 min",
                "correct": false
              }
            ],
            "explanation": "Una hora tiene 60 minutos.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t11-hm-1",
            "question": "2 h =",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "120-min",
                "text": "120 min",
                "correct": true
              },
              {
                "id": "60-min",
                "text": "60 min",
                "correct": false
              },
              {
                "id": "200-min",
                "text": "200 min",
                "correct": false
              },
              {
                "id": "90-min",
                "text": "90 min",
                "correct": false
              }
            ],
            "explanation": "2×60.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t11-hm-2",
            "question": "3 h =",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "180-min",
                "text": "180 min",
                "correct": true
              },
              {
                "id": "120-min",
                "text": "120 min",
                "correct": false
              },
              {
                "id": "300-min",
                "text": "300 min",
                "correct": false
              },
              {
                "id": "240-min",
                "text": "240 min",
                "correct": false
              }
            ],
            "explanation": "3×60.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t11-hm-3",
            "question": "1 h 30 min =",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "90-min",
                "text": "90 min",
                "correct": true
              },
              {
                "id": "130-min",
                "text": "130 min",
                "correct": false
              },
              {
                "id": "60-min",
                "text": "60 min",
                "correct": false
              },
              {
                "id": "30-min",
                "text": "30 min",
                "correct": false
              }
            ],
            "explanation": "60+30=90.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t11-hm-4",
            "question": "2 h 15 min =",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "135-min",
                "text": "135 min",
                "correct": true
              },
              {
                "id": "215-min",
                "text": "215 min",
                "correct": false
              },
              {
                "id": "120-min",
                "text": "120 min",
                "correct": false
              },
              {
                "id": "145-min",
                "text": "145 min",
                "correct": false
              }
            ],
            "explanation": "120+15=135.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t11-hm-5",
            "question": "90 min =",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "1-h-30-min",
                "text": "1 h 30 min",
                "correct": true
              },
              {
                "id": "9-h",
                "text": "9 h",
                "correct": false
              },
              {
                "id": "1-h-90-min",
                "text": "1 h 90 min",
                "correct": false
              },
              {
                "id": "2-h",
                "text": "2 h",
                "correct": false
              }
            ],
            "explanation": "60+30=90.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t11-hm-6",
            "question": "120 min =",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "2-h",
                "text": "2 h",
                "correct": true
              },
              {
                "id": "1-h",
                "text": "1 h",
                "correct": false
              },
              {
                "id": "12-h",
                "text": "12 h",
                "correct": false
              },
              {
                "id": "3-h",
                "text": "3 h",
                "correct": false
              }
            ],
            "explanation": "120÷60=2.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t11-hm-7",
            "question": "150 min =",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "2-h-30-min",
                "text": "2 h 30 min",
                "correct": true
              },
              {
                "id": "1-h-50-min",
                "text": "1 h 50 min",
                "correct": false
              },
              {
                "id": "3-h",
                "text": "3 h",
                "correct": false
              },
              {
                "id": "2-h-50-min",
                "text": "2 h 50 min",
                "correct": false
              }
            ],
            "explanation": "120+30=150.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          }
        ]
      },
      {
        "id": "dinero",
        "title": "Monedas y billetes",
        "subtitle": "Calcular cantidades y cambios con euros y céntimos",
        "kind": "measurement",
        "emoji": "💶",
        "theory": [
          {
            "type": "text",
            "title": "Dinero",
            "text": "El euro es nuestra unidad monetaria. 1 euro equivale a 100 céntimos."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "1 € = 100 céntimos",
              "50 c + 50 c = 1 €",
              "Para hallar el cambio, resta precio al dinero entregado.",
              "Suma precios antes de pagar."
            ]
          },
          {
            "type": "example",
            "title": "Ejemplo",
            "text": "Si algo cuesta 7 € y pagas con 10 €, recibes 3 €."
          },
          {
            "type": "tip",
            "title": "Truco MathCrack",
            "text": "Comprueba: precio + cambio = dinero entregado."
          }
        ],
        "questions": [
          {
            "id": "t11-di-0",
            "question": "1 € =",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "100-c-ntimos",
                "text": "100 céntimos",
                "correct": true
              },
              {
                "id": "10-c-ntimos",
                "text": "10 céntimos",
                "correct": false
              },
              {
                "id": "1-000-c-ntimos",
                "text": "1.000 céntimos",
                "correct": false
              },
              {
                "id": "50-c-ntimos",
                "text": "50 céntimos",
                "correct": false
              }
            ],
            "explanation": "Un euro son cien céntimos.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t11-di-1",
            "question": "50 c + 50 c =",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "1",
                "text": "1 €",
                "correct": true
              },
              {
                "id": "50",
                "text": "50 €",
                "correct": false
              },
              {
                "id": "10-c",
                "text": "10 c",
                "correct": false
              },
              {
                "id": "2",
                "text": "2 €",
                "correct": false
              }
            ],
            "explanation": "Suman 100 céntimos.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t11-di-2",
            "question": "Cuesta 7 € y pagas 10 €. Cambio:",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "3",
                "text": "3 €",
                "correct": true
              },
              {
                "id": "17",
                "text": "17 €",
                "correct": false
              },
              {
                "id": "7",
                "text": "7 €",
                "correct": false
              },
              {
                "id": "2",
                "text": "2 €",
                "correct": false
              }
            ],
            "explanation": "10−7=3.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t11-di-3",
            "question": "2 artículos de 4 € cuestan…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "8",
                "text": "8 €",
                "correct": true
              },
              {
                "id": "6",
                "text": "6 €",
                "correct": false
              },
              {
                "id": "4",
                "text": "4 €",
                "correct": false
              },
              {
                "id": "16",
                "text": "16 €",
                "correct": false
              }
            ],
            "explanation": "2×4=8.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t11-di-4",
            "question": "Tienes 20 € y gastas 13 €. Quedan…",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "7",
                "text": "7 €",
                "correct": true
              },
              {
                "id": "33",
                "text": "33 €",
                "correct": false
              },
              {
                "id": "13",
                "text": "13 €",
                "correct": false
              },
              {
                "id": "6",
                "text": "6 €",
                "correct": false
              }
            ],
            "explanation": "20−13=7.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t11-di-5",
            "question": "75 c + 25 c =",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "1",
                "text": "1 €",
                "correct": true
              },
              {
                "id": "50-c",
                "text": "50 c",
                "correct": false
              },
              {
                "id": "75",
                "text": "75 €",
                "correct": false
              },
              {
                "id": "2",
                "text": "2 €",
                "correct": false
              }
            ],
            "explanation": "100 céntimos.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t11-di-6",
            "question": "Un libro cuesta 12 € y un lápiz 3 €. Total:",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "15",
                "text": "15 €",
                "correct": true
              },
              {
                "id": "9",
                "text": "9 €",
                "correct": false
              },
              {
                "id": "36",
                "text": "36 €",
                "correct": false
              },
              {
                "id": "13",
                "text": "13 €",
                "correct": false
              }
            ],
            "explanation": "12+3=15.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t11-di-7",
            "question": "Pagas 50 € por algo de 38 €. Cambio:",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "12",
                "text": "12 €",
                "correct": true
              },
              {
                "id": "88",
                "text": "88 €",
                "correct": false
              },
              {
                "id": "22",
                "text": "22 €",
                "correct": false
              },
              {
                "id": "18",
                "text": "18 €",
                "correct": false
              }
            ],
            "explanation": "50−38=12.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          }
        ]
      },
      {
        "id": "problemas",
        "title": "Problemas con tiempo y dinero",
        "subtitle": "Resolver situaciones cotidianas",
        "kind": "problems",
        "emoji": "🧠",
        "theory": [
          {
            "type": "text",
            "title": "Problemas de tiempo y dinero",
            "text": "Convierte unidades cuando sea necesario y decide si debes sumar, restar, multiplicar o comparar."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "Tiempo: 1 h = 60 min.",
              "Dinero: 1 € = 100 c.",
              "Para duración, resta hora final − hora inicial.",
              "Para cambio, resta precio al pago."
            ]
          },
          {
            "type": "example",
            "title": "Ejemplo",
            "text": "Una película empieza a las 17:00 y dura 90 min: termina a las 18:30."
          },
          {
            "type": "tip",
            "title": "Truco MathCrack",
            "text": "Dibuja una línea temporal si el problema de horas te cuesta."
          }
        ],
        "questions": [
          {
            "id": "t11-p-0",
            "question": "Una película empieza a las 17:00 y dura 2 h. Termina a…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "19-00",
                "text": "19:00",
                "correct": true
              },
              {
                "id": "18-00",
                "text": "18:00",
                "correct": false
              },
              {
                "id": "20-00",
                "text": "20:00",
                "correct": false
              },
              {
                "id": "17-02",
                "text": "17:02",
                "correct": false
              }
            ],
            "explanation": "17+2=19.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t11-p-1",
            "question": "Clase de 09:00 a 10:30 dura…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "1-h-30-min",
                "text": "1 h 30 min",
                "correct": true
              },
              {
                "id": "30-min",
                "text": "30 min",
                "correct": false
              },
              {
                "id": "2-h",
                "text": "2 h",
                "correct": false
              },
              {
                "id": "1-h",
                "text": "1 h",
                "correct": false
              }
            ],
            "explanation": "De 9 a 10 son 60 min y 30 más.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t11-p-2",
            "question": "Tienes 15 € y compras algo de 9 €. Quedan…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "6",
                "text": "6 €",
                "correct": true
              },
              {
                "id": "24",
                "text": "24 €",
                "correct": false
              },
              {
                "id": "9",
                "text": "9 €",
                "correct": false
              },
              {
                "id": "5",
                "text": "5 €",
                "correct": false
              }
            ],
            "explanation": "15−9=6.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t11-p-3",
            "question": "3 entradas de 8 € cuestan…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "24",
                "text": "24 €",
                "correct": true
              },
              {
                "id": "11",
                "text": "11 €",
                "correct": false
              },
              {
                "id": "16",
                "text": "16 €",
                "correct": false
              },
              {
                "id": "32",
                "text": "32 €",
                "correct": false
              }
            ],
            "explanation": "3×8=24.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t11-p-4",
            "question": "Un viaje dura 120 min. Son…",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "2-h",
                "text": "2 h",
                "correct": true
              },
              {
                "id": "1-h",
                "text": "1 h",
                "correct": false
              },
              {
                "id": "12-h",
                "text": "12 h",
                "correct": false
              },
              {
                "id": "3-h",
                "text": "3 h",
                "correct": false
              }
            ],
            "explanation": "120÷60=2.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t11-p-5",
            "question": "Empiezas a las 16:15 y terminas a las 17:00. Duración:",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "45-min",
                "text": "45 min",
                "correct": true
              },
              {
                "id": "15-min",
                "text": "15 min",
                "correct": false
              },
              {
                "id": "60-min",
                "text": "60 min",
                "correct": false
              },
              {
                "id": "1-h-15-min",
                "text": "1 h 15 min",
                "correct": false
              }
            ],
            "explanation": "De :15 a :60 hay 45 min.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t11-p-6",
            "question": "Pagas 20 € por una compra de 13 €. Cambio:",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "7",
                "text": "7 €",
                "correct": true
              },
              {
                "id": "33",
                "text": "33 €",
                "correct": false
              },
              {
                "id": "13",
                "text": "13 €",
                "correct": false
              },
              {
                "id": "6",
                "text": "6 €",
                "correct": false
              }
            ],
            "explanation": "20−13=7.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t11-p-7",
            "question": "Dos monedas de 2 € y una de 1 € suman…",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "5",
                "text": "5 €",
                "correct": true
              },
              {
                "id": "3",
                "text": "3 €",
                "correct": false
              },
              {
                "id": "4",
                "text": "4 €",
                "correct": false
              },
              {
                "id": "6",
                "text": "6 €",
                "correct": false
              }
            ],
            "explanation": "2+2+1=5.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          }
        ]
      },
      {
        "id": "comprueba",
        "title": "Comprueba tu progreso",
        "subtitle": "Ejercicios mezclados de los contenidos trabajados en el tema",
        "kind": "review",
        "emoji": "🏆",
        "theory": [
          {
            "type": "text",
            "title": "Repaso final",
            "text": "Aquí no hay teoría nueva. Resuelve ejercicios de los apartados que has trabajado en este tema."
          },
          {
            "type": "important",
            "title": "Objetivo",
            "text": "Comprobar que sabes aplicar los conocimientos, no memorizar nombres de secciones."
          },
          {
            "type": "tip",
            "title": "Si fallas",
            "text": "Lee la explicación, vuelve al apartado correspondiente y practica de nuevo."
          }
        ],
        "questions": [
          {
            "id": "tema-11-review-reloj-agujas-0",
            "question": "Un cuarto de hora son…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "15-min",
                "text": "15 min",
                "correct": true
              },
              {
                "id": "10-min",
                "text": "10 min",
                "correct": false
              },
              {
                "id": "20-min",
                "text": "20 min",
                "correct": false
              },
              {
                "id": "30-min",
                "text": "30 min",
                "correct": false
              }
            ],
            "explanation": "60÷4=15.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "tema-11-review-reloj-agujas-1",
            "question": "Media hora son…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "30-min",
                "text": "30 min",
                "correct": true
              },
              {
                "id": "15-min",
                "text": "15 min",
                "correct": false
              },
              {
                "id": "20-min",
                "text": "20 min",
                "correct": false
              },
              {
                "id": "60-min",
                "text": "60 min",
                "correct": false
              }
            ],
            "explanation": "La mitad de 60.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "tema-11-review-reloj-digital-0",
            "question": "08:30 es…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "ocho-y-media",
                "text": "ocho y media",
                "correct": true
              },
              {
                "id": "ocho-en-punto",
                "text": "ocho en punto",
                "correct": false
              },
              {
                "id": "nueve-y-media",
                "text": "nueve y media",
                "correct": false
              },
              {
                "id": "ocho-y-cuarto",
                "text": "ocho y cuarto",
                "correct": false
              }
            ],
            "explanation": "30 minutos = media hora.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "tema-11-review-reloj-digital-1",
            "question": "09:15 es…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "nueve-y-cuarto",
                "text": "nueve y cuarto",
                "correct": true
              },
              {
                "id": "nueve-y-media",
                "text": "nueve y media",
                "correct": false
              },
              {
                "id": "diez-menos-cuarto",
                "text": "diez menos cuarto",
                "correct": false
              },
              {
                "id": "nueve-en-punto",
                "text": "nueve en punto",
                "correct": false
              }
            ],
            "explanation": "15 minutos = un cuarto.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "tema-11-review-horas-minutos-0",
            "question": "1 h =",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "60-min",
                "text": "60 min",
                "correct": true
              },
              {
                "id": "100-min",
                "text": "100 min",
                "correct": false
              },
              {
                "id": "30-min",
                "text": "30 min",
                "correct": false
              },
              {
                "id": "24-min",
                "text": "24 min",
                "correct": false
              }
            ],
            "explanation": "Una hora tiene 60 minutos.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "tema-11-review-horas-minutos-1",
            "question": "2 h =",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "120-min",
                "text": "120 min",
                "correct": true
              },
              {
                "id": "60-min",
                "text": "60 min",
                "correct": false
              },
              {
                "id": "200-min",
                "text": "200 min",
                "correct": false
              },
              {
                "id": "90-min",
                "text": "90 min",
                "correct": false
              }
            ],
            "explanation": "2×60.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "tema-11-review-dinero-0",
            "question": "1 € =",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "100-c-ntimos",
                "text": "100 céntimos",
                "correct": true
              },
              {
                "id": "10-c-ntimos",
                "text": "10 céntimos",
                "correct": false
              },
              {
                "id": "1-000-c-ntimos",
                "text": "1.000 céntimos",
                "correct": false
              },
              {
                "id": "50-c-ntimos",
                "text": "50 céntimos",
                "correct": false
              }
            ],
            "explanation": "Un euro son cien céntimos.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "tema-11-review-dinero-1",
            "question": "50 c + 50 c =",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "1",
                "text": "1 €",
                "correct": true
              },
              {
                "id": "50",
                "text": "50 €",
                "correct": false
              },
              {
                "id": "10-c",
                "text": "10 c",
                "correct": false
              },
              {
                "id": "2",
                "text": "2 €",
                "correct": false
              }
            ],
            "explanation": "Suman 100 céntimos.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "tema-11-review-problemas-0",
            "question": "Una película empieza a las 17:00 y dura 2 h. Termina a…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "19-00",
                "text": "19:00",
                "correct": true
              },
              {
                "id": "18-00",
                "text": "18:00",
                "correct": false
              },
              {
                "id": "20-00",
                "text": "20:00",
                "correct": false
              },
              {
                "id": "17-02",
                "text": "17:02",
                "correct": false
              }
            ],
            "explanation": "17+2=19.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "tema-11-review-problemas-1",
            "question": "Clase de 09:00 a 10:30 dura…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "1-h-30-min",
                "text": "1 h 30 min",
                "correct": true
              },
              {
                "id": "30-min",
                "text": "30 min",
                "correct": false
              },
              {
                "id": "2-h",
                "text": "2 h",
                "correct": false
              },
              {
                "id": "1-h",
                "text": "1 h",
                "correct": false
              }
            ],
            "explanation": "De 9 a 10 son 60 min y 30 más.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          }
        ]
      }
    ]
  },
  {
    "id": "tema-12",
    "order": 12,
    "title": "Los cuerpos geométricos",
    "description": "Aprende la teoría, practica con muchos ejercicios y comprueba tu progreso.",
    "emoji": "🧊",
    "sections": [
      {
        "id": "poliedros",
        "title": "Poliedros: prismas y pirámides",
        "subtitle": "Reconocer caras, aristas y vértices",
        "kind": "geometry",
        "emoji": "🧊",
        "theory": [
          {
            "type": "text",
            "title": "Poliedros",
            "text": "Los poliedros son cuerpos geométricos cuyas caras son polígonos. Prismas y pirámides son poliedros."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "Cara: superficie plana.",
              "Arista: segmento donde se unen dos caras.",
              "Vértice: punto donde se unen aristas.",
              "Los prismas tienen dos bases iguales y paralelas."
            ]
          },
          {
            "type": "example",
            "title": "Ejemplo",
            "text": "Una caja con forma de prisma rectangular tiene caras planas."
          },
          {
            "type": "tip",
            "title": "Truco MathCrack",
            "text": "Busca primero sus caras y bases."
          }
        ],
        "questions": [
          {
            "id": "t12-po-0",
            "question": "Los poliedros tienen caras…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "planas",
                "text": "planas",
                "correct": true
              },
              {
                "id": "siempre-curvas",
                "text": "siempre curvas",
                "correct": false
              },
              {
                "id": "l-quidas",
                "text": "líquidas",
                "correct": false
              },
              {
                "id": "sin-forma",
                "text": "sin forma",
                "correct": false
              }
            ],
            "explanation": "Sus caras son polígonos.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t12-po-1",
            "question": "Donde se unen dos caras hay una…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "arista",
                "text": "arista",
                "correct": true
              },
              {
                "id": "base-circular",
                "text": "base circular",
                "correct": false
              },
              {
                "id": "altura-de-reloj",
                "text": "altura de reloj",
                "correct": false
              },
              {
                "id": "masa",
                "text": "masa",
                "correct": false
              }
            ],
            "explanation": "Es una arista.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t12-po-2",
            "question": "Donde se unen varias aristas hay un…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "v-rtice",
                "text": "vértice",
                "correct": true
              },
              {
                "id": "litro",
                "text": "litro",
                "correct": false
              },
              {
                "id": "radio-siempre",
                "text": "radio siempre",
                "correct": false
              },
              {
                "id": "minuto",
                "text": "minuto",
                "correct": false
              }
            ],
            "explanation": "Es un vértice.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t12-po-3",
            "question": "Un prisma tiene…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "dos-bases-iguales-y-paralelas",
                "text": "dos bases iguales y paralelas",
                "correct": true
              },
              {
                "id": "una-sola-base",
                "text": "una sola base",
                "correct": false
              },
              {
                "id": "solo-caras-curvas",
                "text": "solo caras curvas",
                "correct": false
              },
              {
                "id": "ning-n-v-rtice",
                "text": "ningún vértice",
                "correct": false
              }
            ],
            "explanation": "Es la característica de los prismas.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t12-po-4",
            "question": "Una pirámide tiene…",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "una-base-y-caras-laterales-tri",
                "text": "una base y caras laterales triangulares",
                "correct": true
              },
              {
                "id": "dos-bases-iguales",
                "text": "dos bases iguales",
                "correct": false
              },
              {
                "id": "solo-superficies-curvas",
                "text": "solo superficies curvas",
                "correct": false
              },
              {
                "id": "ninguna-arista",
                "text": "ninguna arista",
                "correct": false
              }
            ],
            "explanation": "Sus caras laterales se encuentran en un vértice.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t12-po-5",
            "question": "¿Un cubo es un poliedro?",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "s",
                "text": "Sí",
                "correct": true
              },
              {
                "id": "no",
                "text": "No",
                "correct": false
              },
              {
                "id": "solo-si-rueda",
                "text": "Solo si rueda",
                "correct": false
              },
              {
                "id": "solo-si-es-grande",
                "text": "Solo si es grande",
                "correct": false
              }
            ],
            "explanation": "Tiene caras planas cuadradas.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t12-po-6",
            "question": "¿Una esfera es un poliedro?",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "no",
                "text": "No",
                "correct": true
              },
              {
                "id": "s",
                "text": "Sí",
                "correct": false
              },
              {
                "id": "siempre",
                "text": "Siempre",
                "correct": false
              },
              {
                "id": "solo-media-esfera",
                "text": "Solo media esfera",
                "correct": false
              }
            ],
            "explanation": "Tiene superficie curva.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t12-po-7",
            "question": "Una caja de zapatos se parece a…",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "un-prisma",
                "text": "un prisma",
                "correct": true
              },
              {
                "id": "una-esfera",
                "text": "una esfera",
                "correct": false
              },
              {
                "id": "un-cono",
                "text": "un cono",
                "correct": false
              },
              {
                "id": "un-cilindro",
                "text": "un cilindro",
                "correct": false
              }
            ],
            "explanation": "Tiene dos bases rectangulares paralelas.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          }
        ]
      },
      {
        "id": "clasificacion",
        "title": "Clasificación de prismas y pirámides",
        "subtitle": "Nombrarlos según la forma de la base",
        "kind": "geometry",
        "emoji": "🔷",
        "theory": [
          {
            "type": "text",
            "title": "Clasificar prismas y pirámides",
            "text": "Prismas y pirámides se nombran según el polígono de sus bases o de su base."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "Base triangular → prisma triangular / pirámide triangular.",
              "Base cuadrangular → prisma cuadrangular / pirámide cuadrangular.",
              "Base pentagonal → nombre pentagonal.",
              "Observa la base antes de clasificar."
            ]
          },
          {
            "type": "example",
            "title": "Ejemplo",
            "text": "Un prisma con bases triangulares es un prisma triangular."
          },
          {
            "type": "tip",
            "title": "Truco MathCrack",
            "text": "La pista está en la forma de la base."
          }
        ],
        "questions": [
          {
            "id": "t12-cl-0",
            "question": "Prisma con base triangular",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "prisma-triangular",
                "text": "prisma triangular",
                "correct": true
              },
              {
                "id": "prisma-pentagonal",
                "text": "prisma pentagonal",
                "correct": false
              },
              {
                "id": "pir-mide-triangular",
                "text": "pirámide triangular",
                "correct": false
              },
              {
                "id": "cilindro",
                "text": "cilindro",
                "correct": false
              }
            ],
            "explanation": "Se nombra por la base.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t12-cl-1",
            "question": "Pirámide con base cuadrada",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "pir-mide-cuadrangular",
                "text": "pirámide cuadrangular",
                "correct": true
              },
              {
                "id": "prisma-triangular",
                "text": "prisma triangular",
                "correct": false
              },
              {
                "id": "cono",
                "text": "cono",
                "correct": false
              },
              {
                "id": "cilindro",
                "text": "cilindro",
                "correct": false
              }
            ],
            "explanation": "La base tiene cuatro lados.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t12-cl-2",
            "question": "Prisma con base pentagonal",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "prisma-pentagonal",
                "text": "prisma pentagonal",
                "correct": true
              },
              {
                "id": "prisma-triangular",
                "text": "prisma triangular",
                "correct": false
              },
              {
                "id": "pir-mide-pentagonal",
                "text": "pirámide pentagonal",
                "correct": false
              },
              {
                "id": "esfera",
                "text": "esfera",
                "correct": false
              }
            ],
            "explanation": "Base de cinco lados.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t12-cl-3",
            "question": "¿Qué miramos para nombrar un prisma?",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "la-forma-de-su-base",
                "text": "la forma de su base",
                "correct": true
              },
              {
                "id": "su-color",
                "text": "su color",
                "correct": false
              },
              {
                "id": "su-peso",
                "text": "su peso",
                "correct": false
              },
              {
                "id": "la-hora",
                "text": "la hora",
                "correct": false
              }
            ],
            "explanation": "La base determina el nombre.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t12-cl-4",
            "question": "¿Qué miramos para nombrar una pirámide?",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "la-forma-de-su-base",
                "text": "la forma de su base",
                "correct": true
              },
              {
                "id": "solo-el-v-rtice-superior",
                "text": "solo el vértice superior",
                "correct": false
              },
              {
                "id": "su-masa",
                "text": "su masa",
                "correct": false
              },
              {
                "id": "su-color",
                "text": "su color",
                "correct": false
              }
            ],
            "explanation": "También se nombra por la base.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t12-cl-5",
            "question": "Una base hexagonal tiene…",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "6-lados",
                "text": "6 lados",
                "correct": true
              },
              {
                "id": "5",
                "text": "5",
                "correct": false
              },
              {
                "id": "4",
                "text": "4",
                "correct": false
              },
              {
                "id": "8",
                "text": "8",
                "correct": false
              }
            ],
            "explanation": "Hexágono = 6.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t12-cl-6",
            "question": "Una base triangular tiene…",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "3-lados",
                "text": "3 lados",
                "correct": true
              },
              {
                "id": "4",
                "text": "4",
                "correct": false
              },
              {
                "id": "5",
                "text": "5",
                "correct": false
              },
              {
                "id": "6",
                "text": "6",
                "correct": false
              }
            ],
            "explanation": "Triángulo = 3.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t12-cl-7",
            "question": "Una base cuadrangular tiene…",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "4-lados",
                "text": "4 lados",
                "correct": true
              },
              {
                "id": "3",
                "text": "3",
                "correct": false
              },
              {
                "id": "5",
                "text": "5",
                "correct": false
              },
              {
                "id": "6",
                "text": "6",
                "correct": false
              }
            ],
            "explanation": "Cuadrilátero = 4.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          }
        ]
      },
      {
        "id": "cuerpos-redondos",
        "title": "Cuerpos redondos",
        "subtitle": "Reconocer cilindro, cono y esfera",
        "kind": "geometry",
        "emoji": "⚽",
        "theory": [
          {
            "type": "text",
            "title": "Cuerpos redondos",
            "text": "Los cuerpos redondos tienen alguna superficie curva."
          },
          {
            "type": "list",
            "title": "Ideas clave",
            "items": [
              "Cilindro: dos bases circulares y superficie lateral curva.",
              "Cono: una base circular y un vértice.",
              "Esfera: toda su superficie es curva.",
              "Estos cuerpos pueden rodar de distintas formas."
            ]
          },
          {
            "type": "example",
            "title": "Ejemplo",
            "text": "Una lata se parece a un cilindro; un cucurucho, a un cono; una pelota, a una esfera."
          },
          {
            "type": "tip",
            "title": "Truco MathCrack",
            "text": "Relaciona cada cuerpo con objetos cotidianos."
          }
        ],
        "questions": [
          {
            "id": "t12-cr-0",
            "question": "Una lata se parece a…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "cilindro",
                "text": "cilindro",
                "correct": true
              },
              {
                "id": "cono",
                "text": "cono",
                "correct": false
              },
              {
                "id": "esfera",
                "text": "esfera",
                "correct": false
              },
              {
                "id": "pir-mide",
                "text": "pirámide",
                "correct": false
              }
            ],
            "explanation": "Tiene dos bases circulares.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t12-cr-1",
            "question": "Un cucurucho se parece a…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "cono",
                "text": "cono",
                "correct": true
              },
              {
                "id": "cilindro",
                "text": "cilindro",
                "correct": false
              },
              {
                "id": "esfera",
                "text": "esfera",
                "correct": false
              },
              {
                "id": "prisma",
                "text": "prisma",
                "correct": false
              }
            ],
            "explanation": "Tiene una base circular y un vértice.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t12-cr-2",
            "question": "Una pelota se parece a…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "esfera",
                "text": "esfera",
                "correct": true
              },
              {
                "id": "cono",
                "text": "cono",
                "correct": false
              },
              {
                "id": "prisma",
                "text": "prisma",
                "correct": false
              },
              {
                "id": "pir-mide",
                "text": "pirámide",
                "correct": false
              }
            ],
            "explanation": "Toda su superficie es curva.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t12-cr-3",
            "question": "El cilindro tiene…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "dos-bases-circulares",
                "text": "dos bases circulares",
                "correct": true
              },
              {
                "id": "una-base",
                "text": "una base",
                "correct": false
              },
              {
                "id": "ninguna-base",
                "text": "ninguna base",
                "correct": false
              },
              {
                "id": "una-base-triangular",
                "text": "una base triangular",
                "correct": false
              }
            ],
            "explanation": "Tiene dos círculos paralelos.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t12-cr-4",
            "question": "El cono tiene…",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "una-base-circular",
                "text": "una base circular",
                "correct": true
              },
              {
                "id": "dos-bases-circulares",
                "text": "dos bases circulares",
                "correct": false
              },
              {
                "id": "dos-bases-cuadradas",
                "text": "dos bases cuadradas",
                "correct": false
              },
              {
                "id": "ninguna-base",
                "text": "ninguna base",
                "correct": false
              }
            ],
            "explanation": "Una base y un vértice.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t12-cr-5",
            "question": "La esfera tiene…",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "superficie-curva",
                "text": "superficie curva",
                "correct": true
              },
              {
                "id": "caras-cuadradas",
                "text": "caras cuadradas",
                "correct": false
              },
              {
                "id": "aristas-rectas",
                "text": "aristas rectas",
                "correct": false
              },
              {
                "id": "v-rtices",
                "text": "vértices",
                "correct": false
              }
            ],
            "explanation": "No tiene caras planas.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t12-cr-6",
            "question": "¿Cuál no es poliedro?",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "cilindro",
                "text": "cilindro",
                "correct": true
              },
              {
                "id": "prisma",
                "text": "prisma",
                "correct": false
              },
              {
                "id": "pir-mide",
                "text": "pirámide",
                "correct": false
              },
              {
                "id": "cubo",
                "text": "cubo",
                "correct": false
              }
            ],
            "explanation": "Tiene superficie curva.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "t12-cr-7",
            "question": "¿Cuál tiene un vértice superior y base circular?",
            "difficulty": "medium",
            "points": 10,
            "answers": [
              {
                "id": "cono",
                "text": "cono",
                "correct": true
              },
              {
                "id": "cilindro",
                "text": "cilindro",
                "correct": false
              },
              {
                "id": "esfera",
                "text": "esfera",
                "correct": false
              },
              {
                "id": "prisma",
                "text": "prisma",
                "correct": false
              }
            ],
            "explanation": "Es el cono.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          }
        ]
      },
      {
        "id": "comprueba",
        "title": "Comprueba tu progreso",
        "subtitle": "Ejercicios mezclados de los contenidos trabajados en el tema",
        "kind": "review",
        "emoji": "🏆",
        "theory": [
          {
            "type": "text",
            "title": "Repaso final",
            "text": "Aquí no hay teoría nueva. Resuelve ejercicios de los apartados que has trabajado en este tema."
          },
          {
            "type": "important",
            "title": "Objetivo",
            "text": "Comprobar que sabes aplicar los conocimientos, no memorizar nombres de secciones."
          },
          {
            "type": "tip",
            "title": "Si fallas",
            "text": "Lee la explicación, vuelve al apartado correspondiente y practica de nuevo."
          }
        ],
        "questions": [
          {
            "id": "tema-12-review-poliedros-0",
            "question": "Los poliedros tienen caras…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "planas",
                "text": "planas",
                "correct": true
              },
              {
                "id": "siempre-curvas",
                "text": "siempre curvas",
                "correct": false
              },
              {
                "id": "l-quidas",
                "text": "líquidas",
                "correct": false
              },
              {
                "id": "sin-forma",
                "text": "sin forma",
                "correct": false
              }
            ],
            "explanation": "Sus caras son polígonos.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "tema-12-review-poliedros-1",
            "question": "Donde se unen dos caras hay una…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "arista",
                "text": "arista",
                "correct": true
              },
              {
                "id": "base-circular",
                "text": "base circular",
                "correct": false
              },
              {
                "id": "altura-de-reloj",
                "text": "altura de reloj",
                "correct": false
              },
              {
                "id": "masa",
                "text": "masa",
                "correct": false
              }
            ],
            "explanation": "Es una arista.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "tema-12-review-clasificacion-0",
            "question": "Prisma con base triangular",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "prisma-triangular",
                "text": "prisma triangular",
                "correct": true
              },
              {
                "id": "prisma-pentagonal",
                "text": "prisma pentagonal",
                "correct": false
              },
              {
                "id": "pir-mide-triangular",
                "text": "pirámide triangular",
                "correct": false
              },
              {
                "id": "cilindro",
                "text": "cilindro",
                "correct": false
              }
            ],
            "explanation": "Se nombra por la base.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "tema-12-review-clasificacion-1",
            "question": "Pirámide con base cuadrada",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "pir-mide-cuadrangular",
                "text": "pirámide cuadrangular",
                "correct": true
              },
              {
                "id": "prisma-triangular",
                "text": "prisma triangular",
                "correct": false
              },
              {
                "id": "cono",
                "text": "cono",
                "correct": false
              },
              {
                "id": "cilindro",
                "text": "cilindro",
                "correct": false
              }
            ],
            "explanation": "La base tiene cuatro lados.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "tema-12-review-cuerpos-redondos-0",
            "question": "Una lata se parece a…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "cilindro",
                "text": "cilindro",
                "correct": true
              },
              {
                "id": "cono",
                "text": "cono",
                "correct": false
              },
              {
                "id": "esfera",
                "text": "esfera",
                "correct": false
              },
              {
                "id": "pir-mide",
                "text": "pirámide",
                "correct": false
              }
            ],
            "explanation": "Tiene dos bases circulares.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          },
          {
            "id": "tema-12-review-cuerpos-redondos-1",
            "question": "Un cucurucho se parece a…",
            "difficulty": "easy",
            "points": 10,
            "answers": [
              {
                "id": "cono",
                "text": "cono",
                "correct": true
              },
              {
                "id": "cilindro",
                "text": "cilindro",
                "correct": false
              },
              {
                "id": "esfera",
                "text": "esfera",
                "correct": false
              },
              {
                "id": "prisma",
                "text": "prisma",
                "correct": false
              }
            ],
            "explanation": "Tiene una base circular y un vértice.",
            "hint": "Piensa en la definición y aplícala al ejemplo."
          }
        ]
      }
    ]
  }
];
