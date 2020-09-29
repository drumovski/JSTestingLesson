let { repeatMessage } = require('../source/index');

test("Name for an example test", () => {
    expect("this is a truthy string").toBeTruthy();
})

describe('repeatMessage block of multiple tests', () => {
    test("repeatMessage functionality", () => {
        expect(repeatMessage("hello", 3)).toEqual("hellohellohello");
        expect(repeatMessage("hello", 0)).toEqual("");
        expect(repeatMessage("a", 5)).not.toEqual("aaaaaaaaaaaaaa");
    
        // expect(repeatMessage()).toHaveBeenCalledTimes(1);
    })
    
    test('should be a function', () => {
        expect(typeof(repeatMessage)).toBe('function');
    })
    
})

const request = require('supertest')
var {server, app} = require('../source/index') // importing the instance of our Express server


afterAll(async (done) => {
	// Force our server reference to close:
	await server.close(); 

	// Dumb hack to trick Jest into waiting a bit more before 
	// it freaks out over processes hanging open. 
	// Potentially because server.close() does not complete instantly? Not sure.
	// This has been an issue for ExpressJS & Jest devs 
	// for several years & solutions are vague.
	await new Promise(resolve => setTimeout(() => resolve(), 500)); 

	// Resolve the done() callback? Again not sure, as solutions are vague.
	done();
})



describe('Express server home page functionality', () => {
    test('should return status 200', async (done) => {
        const response = await request(app).get('/');
        expect(response.statusCode).toEqual(200);

        done();
    })

    test('should return the phase "Hello World!"', async (done) => {
        const response = await request(app).get('/');
        expect(response.body.message).toEqual("Hello World!");

        done()
    })
    
    
})

describe('/studentNames page functionality', () => {

    test('should return the word "Luke"', async (done) => {
        const response = await request(app)
        .post('/studentNames')
        .send({
            studentNames:["Luke", "Ash", "Nandini"]
        })

        expect(response.body.firstStudentName).toEqual("Luke");

        done();
    })
    
    
})

