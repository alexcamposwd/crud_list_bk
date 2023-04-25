const express = require('express');
const routes = express.Router();

const AnnotationController = require('./controllers/AnnotationController');
const PriorityController = require('./controllers/PriorityController');
const ContentController = require('./controllers/ContentController');

// Route Annotations
routes.post('/annotations', AnnotationController.create);
routes.get('/annotations', AnnotationController.read);
routes.delete('/annotations/:id', AnnotationController.delete);

// Route Priority
routes.post('/priorities/:id', PriorityController.update);
routes.get('/priorities', PriorityController.read);

// Route Content
routes.post('/contents/:id', ContentController.update);

module.exports = routes;