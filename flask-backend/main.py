# Importing flask module in the project is mandatory
# An object of Flask class is our WSGI application.
from flask import Flask,request,jsonify
from flask_cors import CORS
import sine
import square
import tri
 
# Flask constructor takes the name of
# current module (__name__) as argument.
app = Flask(__name__)
CORS(app)
 
# The route() function of the Flask class is a decorator,
# which tells the application which URL should call
# the associated function.
@app.route('/sine')
def getsinefrft():
    request_data = request.args['alpha']
    alpha = float(request_data)
    vals=sine.frftsine(alpha)
    print(vals.result)
    response=jsonify({'real' : vals.result.real.tolist(),'imag' : vals.result.imag.tolist()})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return (response)
 
@app.route('/sineft')
def getsineft():
    vals=sine.ftsine()
    response=jsonify({'real' : vals.real.tolist(),'imag' : vals.imag.tolist()})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return (response)

@app.route('/sineog')
def getsineog():
    vals=sine.ogsine()
    response=jsonify({'og' : vals.tolist()})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return (response)

@app.route('/sinet')
def getsinet():
    vals=sine.tsine()
    response=jsonify({'t' : vals.tolist()})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return (response)


@app.route('/square')
def getsquarefrft():
    request_data = request.args['alpha']
    alpha = float(request_data)
    vals=square.frftsquare(alpha)
    response=jsonify({'real' : vals.result.real.tolist(),'imag' : vals.result.imag.tolist()})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return (response)
 
@app.route('/squareft')
def getsquareft():
    vals=square.ftsquare()
    response=jsonify({'real' : vals.real.tolist(),'imag' : vals.imag.tolist()})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return (response)

@app.route('/squareog')
def getsquareog():
    vals=square.ogsquare()
    response=jsonify({'og' : vals.tolist()})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return (response)

@app.route('/squaret')
def getsquaret():
    vals=square.tsquare()
    response=jsonify({'t' : vals.tolist()})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return (response)


@app.route('/tri')
def gettrifrft():
    request_data = request.args['alpha']
    alpha = float(request_data)
    vals=tri.frfttri(alpha)
    response=jsonify({'real' : vals.result.real.tolist(),'imag' : vals.result.imag.tolist()})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return (response)
 
@app.route('/trift')
def gettrift():
    vals=tri.fttri()
    response=jsonify({'real' : vals.real.tolist(),'imag' : vals.imag.tolist()})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return (response)

@app.route('/triog')
def gettriog():
    vals=tri.ogtri()
    response=jsonify({'og' : vals.tolist()})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return (response)

@app.route('/trit')
def gettrit():
    vals=tri.ttri()
    response=jsonify({'t' : vals.tolist()})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return (response)

# main driver function
if __name__ == '__main__':
 
    # run() method of Flask class runs the application
    # on the local development server.
    app.run(debug=True, host='0.0.0.0', port=8080)