db.createCollection('usuarios', {validator: {$jsonSchema: {bsonType: 'object',title: 'usuarios',required: ['email','password','nombre','fecha_nacimiento','sexo','pais','codigo_postal'],properties:{email:{bsonType: 'string'},password:{bsonType: 'string'},nombre:{bsonType: 'string'},fecha_nacimiento:{bsonType: 'date'},sexo:{enum: ["hombre", "mujer"]},pais:{bsonType: 'string'},codigo_postal:{bsonType: 'string'}}}}});