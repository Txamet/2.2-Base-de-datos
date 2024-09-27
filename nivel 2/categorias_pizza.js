db.createCollection('categorias_pizza', {validator: {$jsonSchema: {bsonType: 'object',title: 'categorias_pizza',required: ['nombre','pizzas'],properties:{nombre:{bsonType: 'string'},pizzas:{bsonType: 'array',items:{title: 'object',required: ['id','nombre'],properties:{id:{bsonType: 'int'},nombre:{bsonType: 'string'}}}}}}}});