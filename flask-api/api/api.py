from flask import Flask, jsonify, request, json
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///note.db"
db = SQLAlchemy(app)


class Note(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text, primary_key=False)


def __str__(self):
    return f'{self.id} {self.content}'


def note_serializer(note):
    return{
        'id': note.id,
        'content': note.content
    }


@app.route('/api', methods=['GET'])
def index():
    return jsonify([*map(note_serializer, Note.query.all())])


@app.route('/api/create', methods=['POST'])
def create():
    request_data = json.loads(request.data)
    note = Note(content=request_data['content'])

    db.session.add(note)
    db.session.commit()

    return {'201': 'note created successfully'}

# api to open a chosen note into a new page(Show)


@app.route('/api/<int:id>')
def Show(id):
    return jsonify([*map(note_serializer, Note.query.filter_by(id=id))])

# Delete api(Post req)============================


@app.route('/api/<int:id>', methods=['POST'])
def delete(id):
    request_data = json.loads(request.data)
    Note.query.filter_by(id=request_data['id']).delete()
    db.session.commit()

    return{'204': 'Deleted successfully'}

#Update notes api==================================

@app.route('/api/<int:id>/', methods=['PUT'])
def update(id):
    request_data = json.loads(request.data)
    note = Note.query.filter_by(id=request_data['id']).update()
    if request_data['id']:
        note.id = request_data['id']
    db.session.commit()
    return note

if __name__ == '__main__':
    app.run(debug=True)
