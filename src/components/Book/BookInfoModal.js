import React from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import Title from '../Title/Title';
import moment from 'moment';

export default function BookInfoModal({ show, onClose, data }) {

    return (
        <Modal size="lg" isOpen={ show } toggle={onClose}>
            <ModalHeader toggle={onClose}>
                <div className="BookInfoModal-header">
                    <Title text="Details" />
                </div>
            </ModalHeader>
            <ModalBody>
                {
                    data.volumeInfo &&
                    <div className="row BookInfoModa-main">
                        <div className="col-12 col-sm-4 text-center">
                            <img src={ data.volumeInfo.imageLinks.thumbnail } alt={ data.id } />
                        </div>
                        <div className="col-12 col-sm-8">
                            <div className="BookInfoModal-title">
                                { data.volumeInfo.title }
                            </div>
                            <div className="BookInfoModal-author">
                                Author: { data.volumeInfo.authors.map(item => `${item} `) }
                            </div>
                            <div className="BookInfoModal-date">
                                {
                                    data.volumeInfo.publishedDate.length <= 4 ? 
                                        `Published: ${ data.volumeInfo.publishedDate }`
                                    :
                                        `Published: ${ moment(data.volumeInfo.publishedDate, 'YYYY-MM-DD').format('DD/MM/YYYY') }`
                                }
                                
                            </div>
                            <div className="BookInfoModal-description">
                                { data.volumeInfo.description }
                            </div>
                        </div>
                    </div>
                }
            </ModalBody>
        </Modal>
    )
}