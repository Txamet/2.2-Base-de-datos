db.createCollection('gafas', {validator: {$jsonSchema: {bsonType: 'object',title: 'gafas',required: ['marca','graduacion_vidrio_izquierdo','graduacion_vidrio_derecho','montura','color_montura','color_vidrio_izquierdo','color_vidrio_derecho','precio','proveedor','clientes'],properties:{marca:{bsonType: 'string'},graduacion_vidrio_izquierdo:{bsonType: 'decimal'},graduacion_vidrio_derecho:{bsonType: 'decimal'},montura:{enum: ["flotante", "pasta", "metalica"]},color_montura:{bsonType: 'string'},color_vidrio_izquierdo:{bsonType: 'string'},color_vidrio_derecho:{bsonType: 'string'},precio:{bsonType: 'double'},proveedor:{bsonType: 'object',title: 'object',properties:{id_proveedor:{bsonType: 'int'},nombre:{bsonType: 'string'}}},clientes:{bsonType: 'array',items:{title: 'object',properties:{id_cliente:{bsonType: 'int'},nombre:{bsonType: 'int'}}}}}}},validationLevel:'strict',validationAction:'error'});