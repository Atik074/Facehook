import { useProfile } from "../../hooks/useProfile";
import EditIcon from "../../assets/icons/edit.svg"
import { useState } from "react";
import CheakIcon from "../../assets/icons/close.svg"

const Bio = () => {
    const {state} = useProfile()
    const [bio , setBio] = useState(state?.user?.bio)
    const [editMode , setEditMode] = useState()

    return (
         <>
        <div className="mt-4 flex items-start gap-2 lg:mt-6">
        <div className="flex-1">
            {
                !editMode ? (  <p className="leading-[188%] text-gray-400 lg:text-lg">
                    {state?.user?.bio}
                </p>) :(
                    <textarea 
                        className="leading-[188%] text-gray-400 lg:text-lg"
                    value={bio} 
                     rows={4}
                     cols={55}
                     onChange={(e)=>setBio(e.target.value)}
                    >
                    </textarea>
                )
            }
        
        </div>
        {/* <!-- Edit Bio button. The Above bio will be editable when clicking on the button --> */}
        {
            !editMode ?(  <button
                   onClick={()=>setEditMode(true)}
             className="flex-center h-7 w-7 rounded-full">
                <img src={EditIcon}
                 alt="Edit" />
              </button>):
              ( 
                 <button className="flex-center h-7 w-7 rounded-full">
          <img src={CheakIcon} alt="Edit" />
        </button>
        )
        }
      
      </div>
      
      </>
    );
};

export default Bio;