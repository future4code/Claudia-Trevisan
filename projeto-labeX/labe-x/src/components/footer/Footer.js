import React, { useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios'
import { DivFooter } from './Styles';

export default function Footer() {

    return(
        <DivFooter>
            <p>
                Labe-X foi criado por @trevisano como um exercício de Front-End
            </p>
        </DivFooter>
    );
}