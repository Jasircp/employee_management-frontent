import "./Address.css"

export const Address = () => {
    return (
        <div className="form-address">
            <label>Address</label>
            <input type="text" placeholder="Flat No. / House No." name="house_number"/>
            <input type="text" placeholder="Address Line 1" name="addrees_line_1"/>
            <input type="text" placeholder="Address Line 2" name="addrees_line_2"/>
            <input type="text" placeholder="Pincode" name="adress_pincode"/>
            
        </div>
    )
}