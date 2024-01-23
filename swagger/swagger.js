// this file was generated by serverless-auto-swagger
            module.exports = {
  "swagger": "2.0",
  "info": {
    "title": "pt-richardllacza",
    "version": "1"
  },
  "paths": {
    "/richardllacza/getStarship_lambda/{id}": {
      "get": {
        "summary": "getStarship_lambda",
        "description": "",
        "operationId": "getStarship_lambda.get./richardllacza/getStarship_lambda/{id}",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "200 response"
          }
        }
      }
    },
    "/richardllacza/getPeople_lambda/{id}": {
      "get": {
        "summary": "getPeople_lambda",
        "description": "",
        "operationId": "getPeople_lambda.get./richardllacza/getPeople_lambda/{id}",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "200 response"
          }
        }
      }
    },
    "/richardllacza/postRichardObj": {
      "post": {
        "summary": "postRichardObj",
        "description": "",
        "operationId": "postRichardObj.post./richardllacza/postRichardObj",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "200 response"
          }
        }
      }
    },
    "/richardllacza/getRichardObj": {
      "get": {
        "summary": "getRichardObj",
        "description": "",
        "operationId": "getRichardObj.get./richardllacza/getRichardObj",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "200 response"
          }
        }
      }
    }
  },
  "definitions": {
    "HttpMethod": {
      "enum": [
        "get",
        "post",
        "put",
        "delete",
        "head",
        "options",
        "patch",
        "trace"
      ],
      "title": "HttpMethod",
      "type": "string"
    }
  },
  "securityDefinitions": {},
  "basePath": "/dev"
};