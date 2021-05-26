import React from  'react';

const Results =(props) => {
    const { firstName, lastName, email, password, confirmPassowrd }  = props.data;
    return(
        <div>
            <form-wrapper>
                    <div className="form-group">
                        <h2>Your Form Data</h2>
                    </div>  
                    <div className="form-group">
                        <p>First Name:{firstName}</p>
                    </div>
                    <div className="form-group">
                        <p>Last Name:{lastName}</p>                        
                    </div>
                    <div className="form-group">
                        <p>Email:{email}</p>                        
                    </div>
                    <div className="form-group">
                        <p>Password: {password}</p>                        
                    </div>
                    <div className="form-group">                        
                        <p>Confirm Password:{confirmPassowrd}</p>
                    </div>
                        
            </form-wrapper>  
        </div>
    )
}
export default Results;