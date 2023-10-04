import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { db } from "./firebase";
import { onValue, ref } from "firebase/database";
import { useState, useEffect } from 'react';
function App() {

  const [cairanInfus, setProjects] = useState([]);
  const [keterangan, setProjects2] = useState([]);
  const [tetesPerMenit, setProjects3] = useState([]);
  const [tetesan, setProjects4] = useState([]);
  const [berat, setProjects5] = useState([]);

  useEffect(() => {
    const query = ref(db, "CairanInfus");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();

      if (snapshot.exists()) {
        // Convert the object of objects into an array of objects
        setProjects(data);
      } else {
        // If the data doesn't exist or has been deleted, set cairanInfus to an empty array
        setProjects([]);
      }
    });
  }, []);

  useEffect(() => {
    const query = ref(db, "Keterangan");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();

      if (snapshot.exists()) {
        // Convert the object of objects into an array of objects
        setProjects2(data);
      } else {
        // If the data doesn't exist or has been deleted, set cairanInfus to an empty array
        setProjects2([]);
      }
    });
  }, []);

  useEffect(() => {
    const query = ref(db, "TetesPerMenit");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();

      if (snapshot.exists()) {
        // Convert the object of objects into an array of objects
        setProjects3(data);
      } else {
        // If the data doesn't exist or has been deleted, set cairanInfus to an empty array
        setProjects3([]);
      }
    });
  }, []);

  useEffect(() => {
    const query = ref(db, "Tetesan");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();

      if (snapshot.exists()) {
        // Convert the object of objects into an array of objects
        setProjects4(data);
      } else {
        // If the data doesn't exist or has been deleted, set cairanInfus to an empty array
        setProjects4([]);
      }
    });
  }, []);

  useEffect(() => {
    const query = ref(db, "berat");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();

      if (snapshot.exists()) {
        // Convert the object of objects into an array of objects
        setProjects5(data);

      } else {
        // If the data doesn't exist or has been deleted, set cairanInfus to an empty array
        setProjects5([]);
      }
    });
  }, []);
  return (
    <>
    <Navbar></Navbar>
    <div className='container mt-4'>
      <div className='row'>
      <div className='col-10 mb-4'>
    {keterangan === 'Cairan Infus Habis' && (
                    <Alert variant='danger' className='mt-2'>
                      Peringatan Cairan Infus Telah Habis!!!
                    </Alert>
                  )}
    {keterangan === 'Cairan Infus Sisa Setengah' && (
                    <Alert variant='warning' className='mt-2'>
                      Peringatan Cairan Infus Sisa Setengah!!!
                    </Alert>
                  )}
    </div>
      <div className='col-4'>
      <fieldset disabled>
      <Form.Group  className="mb-3">
        <h6>Penyakit Pasien</h6>
        <Form.Control style={{ backgroundColor:'#edf2f4', color:'black' }} type="text" value="Maag" />
      </Form.Group>
      </fieldset>
        </div>
        <div className='col-4'>
        <fieldset disabled>
      <Form.Group className="mb-3">
        <h6>Nama Pasien</h6>
        <Form.Control style={{ backgroundColor:'#edf2f4', color:'black' }} type="text" value="Ahmad" />
      </Form.Group>
      </fieldset>
        </div>
        <div className='col-4'>
        <fieldset disabled>
      <Form.Group disabled className="mb-3">
        <h6>Alamat Pasien</h6>
        <Form.Control style={{ backgroundColor:'#edf2f4', color:'black' }} type="text" value="Patobong" />
      </Form.Group>
      </fieldset>
        </div>
        <div className='col-4'>
        <fieldset disabled>
      <Form.Group className="mb-3">
        <h6>Jenis Kelamin Pasien</h6>
        <Form.Control style={{ backgroundColor:'#edf2f4', color:'black' }} type="text"  value="Laki-Laki" />
      </Form.Group>
      </fieldset>
        </div>
        <div className='col-4'>
        <fieldset disabled>
      <Form.Group className="mb-3">
        <h6>Umur Pasien</h6>
        <Form.Control style={{ backgroundColor:'#edf2f4', color:'black' }} type="text" value="20 Tahun" />
      </Form.Group>
      </fieldset>
        </div>
        <div>
        <center>
        {/* <div className='col-12'>
        <Card className='mt-4' style={{ width: '20rem', textAlign:'center', backgroundColor:'#2a9d8f', color:'white' }}>
          <Card.Body>
            <Card.Title>CAIRAN INFUS</Card.Title>
            <Card.Text>
              {cairanInfus}
            </Card.Text>
          </Card.Body>
        </Card>
        </div> */}
        <div className='col-12'>
        <Card className='mt-4' style={{ width: '20rem' , textAlign:'center', backgroundColor:'#ff006e', color:'white'  }}>
          <Card.Body>
            <Card.Title>KETERANGAN</Card.Title>
            <Card.Text>
              {keterangan}
            </Card.Text>
          </Card.Body>
        </Card>
        </div>
        <div className='col-12'>
        <Card className='mt-4' style={{ width: '20rem' , textAlign:'center', backgroundColor:'#e76f51', color:'white' }}>
          <Card.Body>
            <Card.Title>TETES PER-MENIT</Card.Title>
            <Card.Text>
              {tetesPerMenit} Tetesan
            </Card.Text>
          </Card.Body>
        </Card>
        </div>
        <div className='col-12'>
        <Card className='mt-4' style={{ width: '20rem' , textAlign:'center', backgroundColor:'#48cae4', color:'white' }}>
          <Card.Body>
            <Card.Title>TETESAN</Card.Title>
            <Card.Text>
            {tetesan}
            </Card.Text>
          </Card.Body>
        </Card>
        </div>
        <div className='col-12'>
        <Card className='mt-4 mb-5' style={{ width: '20rem' , textAlign:'center', backgroundColor:'#457b9d', color:'white' }}>
          <Card.Body>
            <Card.Title>BERAT</Card.Title>
            <Card.Text>
            {berat} Gram
            </Card.Text>
          </Card.Body>
        </Card>
        </div>
        </center>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;

