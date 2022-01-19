import React, { useEffect, useState } from 'react'
import { VisitorList } from './VisitorList';

export const AddVisitor = () => {

    const [modalVisib, setModalVisib] = useState(true);

    //get data from local storage
    const getLocalItems = () => {
        let list = localStorage.getItem('lists');
        if (list) {
            return JSON.parse(localStorage.getItem('lists'));
        }
        else {
            return [];
        }
    }

    //to automatically clear local storage after 30 minutes
    setTimeout(()=>{
        localStorage.clear();
    }, 1800000);


    const addClicked = () => {
        setModalVisib(false);
    }

    const cancelClicked = () => {
        setModalVisib(true);
        document.getElementById("name-text-field").value = null;
        document.getElementById("mobileno-text-field").value = null;
        document.getElementById("id-text-field").value = null;
    }

    const addData = (name, mobileno, id) => {
        const myData =
        {
            name: name,
            mobileno: mobileno,
            id: id
        }
        setDatas([...datas, myData])
    }

    const onDelete = (data) => {
        setDatas(datas.filter((e) => {
            return e !== data;
        }));

    }

    const [datas, setDatas] = useState(getLocalItems());

    const [name, setName] = useState();
    const [mobileno, setmobileno] = useState();
    const [id, setId] = useState();

    const submitForm = (e) => {
        e.preventDefault();

        if (name == null || mobileno == null || id == null) {
            alert("Please fill all the details !");
        }

        else {

            addData(name, mobileno, id);

            setModalVisib(true);

            setName(null);
            setmobileno(null);
            setId(null);

            document.getElementById("name-text-field").value = null;
            document.getElementById("mobileno-text-field").value = null;
            document.getElementById("id-text-field").value = null;
        }
    }




    //add data to local storage
    useEffect(() => {
        localStorage.setItem('lists', JSON.stringify(datas))
    }, [datas])


    return (
        <div>
            <VisitorList datas={datas} onDelete={onDelete} />

            <div className="add-visitor">
                <div className="add-btn">
                    <i className="fa fa-plus-circle" data-toggle="modal" data-target="#exampleModalCenter" onClick={addClicked}></i>
                </div>
            </div>
            <div className="modal-bg" style={modalVisib ? { display: 'none' } : {}}>
                <div className="modal-box">
                    <div className="modal-inner">
                        <h1>ADD VISITOR</h1>
                        <div className="modal-close"><i className="fa fa-times" onClick={cancelClicked}></i></div>
                        <form>
                            <input type="text" placeholder="NAME" id='name-text-field' onChange={(e) => {
                                setName(e.target.value)
                            }} />
                            <input type="number" placeholder="MOBILE NO" id='mobileno-text-field' onChange={(e) => {
                                setmobileno(e.target.value)
                            }} />
                            <input type="number" placeholder="ID" id='id-text-field' onChange={(e) => {
                                setId(e.target.value)
                            }} />
                            <button onClick={submitForm}>submit</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}
