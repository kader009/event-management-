import { NavLink } from 'react-router-dom';
import { BarChart, Bar } from "recharts";

const Dashboard = () => {

  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100
    }
  ];

  return (
    <div className="mx-10">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <div className="flex-1  text-[32px] font-semibold text-[#000000]">
            Crazy <span className="ml-1 text-[#0B63E5]">Hour</span>
          </div>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li className="text-[16px] font-medium">
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <a className="text-[16px] font-medium">Link</a>
            </li>
            <li>
              <a className="text-[16px] font-medium">Link</a>
            </li>
          </ul>
        </div>
      </div>
      <div className='flex justify-center items-center gap-10 flex-wrap'>
        <div className="card w-80 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-sm">Total Revenue</h2>
            <p className='text-2xl font-semibold'>$45,231.89</p>
            <span className='text-gray-500 text-xs'>+20.1% from last month</span>
          </div>
        </div>
        <div className="card w-80 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-sm">Subscriptions</h2>
            <p className='text-2xl font-semibold'>+2350</p>
            <span className='text-gray-500 text-xs'>+180.1% from last month</span>
          </div>
        </div>
        <div className="card w-80 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-sm">Sales</h2>
            <p className='text-2xl font-semibold'>+12,234</p>
            <span className='text-gray-500 text-xs'>+19% from last month</span>
          </div>
        </div>
        <div className="card w-80 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-sm">Active Now</h2>
            <p className='text-2xl font-semibold'>+573</p>
            <span className='text-gray-500 text-xs'>+201 since last hour</span>
          </div>
        </div>
      </div>
      <div className='chart flex justify-center gap-10 items-center flex-wrap mt-5'>
        <div className=''>
        <BarChart width={600} height={500} data={data}>
      <Bar dataKey="uv" fill="#000" />
    </BarChart>
        </div>
        <div className=''>
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg" />
              </div>
            </div>
            <div>
              <div className="font-bold">Hart Hagerty</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
          <br/>
          <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
        </td>
        <td>Purple</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      {/* row 2 */}
      <tr>
        
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="https://media.istockphoto.com/id/1289220545/photo/beautiful-woman-smiling-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=qmOTkGstKj1qN0zPVWj-n28oRA6_BHQN8uVLIXg0TF8=" />
              </div>
            </div>
            <div>
              <div className="font-bold">Brice Swyre</div>
              <div className="text-sm opacity-50">China</div>
            </div>
          </div>
        </td>
        <td>
          Carroll Group
          <br/>
          <span className="badge badge-ghost badge-sm">Tax Accountant</span>
        </td>
        <td>Red</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      {/* row 3 */}
      <tr>
        
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg" />
              </div>
            </div>
            <div>
              <div className="font-bold">Marjy Ferencz</div>
              <div className="text-sm opacity-50">Russia</div>
            </div>
          </div>
        </td>
        <td>
          Rowe-Schoen
          <br/>
          <span className="badge badge-ghost badge-sm">Office Assistant I</span>
        </td>
        <td>Crimson</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      {/* row 4 */}
      <tr>
        
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?cs=srgb&dl=pexels-christina-morillo-1181690.jpg&fm=jpg" />
              </div>
            </div>
            <div>
              <div className="font-bold">Yancy Tear</div>
              <div className="text-sm opacity-50">Brazil</div>
            </div>
          </div>
        </td>
        <td>
          Wyman-Ledner
          <br/>
          <span className="badge badge-ghost badge-sm">Community Outreach Specialist</span>
        </td>
        <td>Indigo</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      {/* row 5 */}
      <tr>
        
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="https://img.freepik.com/free-photo/handsome-young-man-with-arms-crossed-white-background_23-2148222620.jpg" />
              </div>
            </div>
            <div>
              <div className="font-bold">Alex Tear</div>
              <div className="text-sm opacity-50">Argentina</div>
            </div>
          </div>
        </td>
        <td>
          New One Ledner
          <br/>
          <span className="badge badge-ghost badge-sm">Community Manager</span>
        </td>
        <td>India</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      {/* row 6 */}
      <tr>
        
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="https://img.freepik.com/photos-premium/portrait-studio-beau-jeune-homme-americain-blanc-beau-sourire_1005838-127.jpg" />
              </div>
            </div>
            <div>
              <div className="font-bold">Mack Blue</div>
              <div className="text-sm opacity-50">Korea</div>
            </div>
          </div>
        </td>
        <td>
          Creative Academi
          <br/>
          <span className="badge badge-ghost badge-sm">Outreach Specialist</span>
        </td>
        <td>Latin</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    </tbody>
    
    
  </table>
</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
