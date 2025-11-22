import { useState, useEffect } from 'react';

const menuData = {
  0: { day: 'Sunday', breakfast: { main: 'Masala Dosa', sides: ['Sambhar + Chutney', 'Omelette', 'Boiled Egg', 'Bread+Butter+Jam', 'Bournvita', 'Hot & Cold Milk', 'Tea & Coffee', 'Cornflakes'] }, lunch: { main: 'Veg Biryani', sides: ['Pyaaz Paratha', 'Moong Dry', 'Thecha', 'Lehsun Chutney', 'Fryums', 'Macaroni Salad', 'Vegetable Raita'] }, snacks: { main: 'Bread Pakoda', sides: ['Tea & Coffee'] }, dinner: { main: 'Chhole Bhature', sides: ['Chawali Masala', 'Dahi Sev Puri', 'Masala Khichadi', 'Chapati', 'Kokam Rasam', 'Mix Salad', 'Choco Bite'] } },
  1: { day: 'Monday', breakfast: { main: 'Aloo Paratha', sides: ['Curd', 'Omelette', 'Boiled Egg', 'Bread+Butter+Jam', 'Bournvita', 'Hot & Cold Milk', 'Tea & Coffee', 'Cornflakes'] }, lunch: { main: 'Malai Kofta', sides: ['Black Chana Masala', 'Dal Tadka', 'Plain Rice', 'Chapati', 'Rasam', 'Fryums', 'Green Salad', 'Buttermilk', 'Gulab Jamun'] }, snacks: { main: 'Veg Chowmein', sides: ['Tea & Coffee'] }, dinner: { main: 'Mutter Paneer', sides: ['Mushroom Kadhai', 'Dal Masala', 'Plain Rice', 'Chapati+Paratha', 'Sambhar', 'Onion Salad', 'Boondi Raita', 'Goan Egg Curry', 'Fruit'] } },
  2: { day: 'Tuesday', breakfast: { main: 'Tadka Idli', sides: ['Coconut Chutney', 'Omelette', 'Boiled Egg', 'Bread+Butter+Jam', 'Bournvita', 'Hot & Cold Milk', 'Tea & Coffee', 'Cornflakes'] }, lunch: { main: 'Punjabi Rajma', sides: ['Aloo Baingan Dry', 'Dal Kolhapuri', 'Plain Rice', 'Chapati', 'Sambhar', 'Roasted Papad', 'Chana Onion Tomato Salad', 'Plain Curd', 'Jalebi Rabdi'] }, snacks: { main: 'Vada Pav', sides: ['Tea & Coffee'] }, dinner: { main: 'Pav Bhaji', sides: ['Baingan Bharta', 'Dal Fry', 'Plain Rice', 'Chapati', 'Plain Curd', 'Onion + Lemon', 'Rasam'] } },
  3: { day: 'Wednesday', breakfast: { main: 'Misal Pav', sides: ['Farsaan', 'Omelette', 'Boiled Egg', 'Bread+Butter+Jam', 'Bournvita', 'Hot & Cold Milk', 'Tea & Coffee', 'Cornflakes'] }, lunch: { main: 'Dal Makhni', sides: ['Soya Masala', 'Kurkuri Bhindi', 'Jeera Rice', 'Chapati', 'Rasam', 'Fryums', 'Sprout Moong Salad', 'Punjabi Lassi', 'Boondi Laddoo'] }, snacks: { main: 'Aloo Tikki Chaat', sides: ['Tea & Coffee'] }, dinner: { main: 'Paneer Biryani', sides: ['Mix Paratha', 'Dal Lasooni', 'Plain Rice', 'Chapati', 'Sambhar', 'Mix Salad', 'Veg Raita', 'Chicken Biryani', 'Fruit'] } },
  4: { day: 'Thursday', breakfast: { main: 'Onion Poha', sides: ['Lemon+Sev+Curd', 'Omelette', 'Boiled Egg', 'Bread+Butter+Jam', 'Bournvita', 'Hot & Cold Milk', 'Tea & Coffee', 'Cornflakes'] }, lunch: { main: 'Chhole Amritsari', sides: ['Aloo Jeera', 'Dal Fry', 'Plain Rice', 'Puri + Chapati', 'Sambhar', 'Fried Papad', 'Toss Salad', 'Fresh Lime Water', 'Sevai Kheer'] }, snacks: { main: 'Sabudana Vada', sides: ['Tea & Coffee'] }, dinner: { main: 'Aloo Matar Gravy', sides: ['Tawa Veg Dry', 'Dal Tadka', 'Jeera Rice', 'Chapati', 'Plain Curd', 'Toss Salad', 'Rasam'] } },
  5: { day: 'Friday', breakfast: { main: 'Medu Vada', sides: ['Sambhar + Chutney', 'Omelette', 'Boiled Egg', 'Bread+Butter+Jam', 'Bournvita', 'Hot & Cold Milk', 'Tea & Coffee', 'Cornflakes'] }, lunch: { main: 'Kadi Pakoda', sides: ['Soya Kheema', 'Dal Tadka', 'Onion Rice', 'Chapati', 'Rasam', 'Fryums', 'Dhokla', 'Plain Curd', 'Rasmalai/Rasgulla'] }, snacks: { main: 'Veg Cutlet', sides: ['Tea & Coffee'] }, dinner: { main: 'Paneer Tikka Masala', sides: ['Dal Fry', 'Jeera Rice', 'Chapati+Paratha', 'Sambhar', 'Green Salad', 'Boondi Raita', 'Chicken Patiala/Egg Bhurji', 'Fruit'] } },
  6: { day: 'Saturday', breakfast: { main: 'Upma', sides: ['Chutney + Ketchup', 'Omelette', 'Boiled Egg', 'Bread+Butter+Jam', 'Bournvita', 'Hot & Cold Milk', 'Tea & Coffee', 'Cornflakes'] }, lunch: { main: 'Aloo Rasila', sides: ['Moong Dry', 'Dal Lasooni', 'Mutter Rice', 'Chapati', 'Sambhar', 'Fried Papad', 'Masala Chopped Salad', 'Jaljeera', 'Fruit Custard'] }, snacks: { main: 'French Fries', sides: ['Tea & Coffee'] }, dinner: { main: 'Schezwan Fried Rice', sides: ['Dal Kolhapuri', 'Manchurian', 'Chapati', 'Sweet Corn Soup', 'Mix Salad', 'Rasam'] } }
};

const mealConfig = {
  breakfast: { icon: '🌅', time: '7:30 - 9:30 AM', gradient: 'from-orange-400 via-amber-500 to-yellow-500', bg: 'from-orange-950 to-amber-950' },
  lunch: { icon: '☀️', time: '12:30 - 2:30 PM', gradient: 'from-emerald-400 via-green-500 to-teal-500', bg: 'from-emerald-950 to-teal-950' },
  snacks: { icon: '✨', time: '5:00 - 6:00 PM', gradient: 'from-pink-400 via-rose-500 to-red-500', bg: 'from-pink-950 to-rose-950' },
  dinner: { icon: '🌙', time: '7:30 - 9:30 PM', gradient: 'from-violet-400 via-purple-500 to-indigo-500', bg: 'from-violet-950 to-indigo-950' }
};

const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export default function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [dayOffset, setDayOffset] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const today = currentTime.getDay();
  const selectedDay = (today + dayOffset + 7) % 7;
  const selectedMenu = menuData[selectedDay];
  
  const getDisplayDate = () => {
    const date = new Date(currentTime);
    date.setDate(date.getDate() + dayOffset);
    return date;
  };

  const displayDate = getDisplayDate();
  
  const getMealOrder = () => {
    if (dayOffset !== 0) return ['breakfast', 'lunch', 'snacks', 'dinner'];
    const hour = currentTime.getHours();
    if (hour >= 19 || hour < 7) return ['dinner', 'snacks', 'lunch', 'breakfast'];
    if (hour >= 17) return ['snacks', 'lunch', 'breakfast', 'dinner'];
    if (hour >= 12) return ['lunch', 'breakfast', 'dinner', 'snacks'];
    return ['breakfast', 'dinner', 'snacks', 'lunch'];
  };

  const getCurrentMeal = () => {
    if (dayOffset !== 0) return null;
    const hour = currentTime.getHours();
    if (hour >= 7 && hour < 10) return 'breakfast';
    if (hour >= 12 && hour < 15) return 'lunch';
    if (hour >= 17 && hour < 18) return 'snacks';
    if (hour >= 19 && hour < 22) return 'dinner';
    return null;
  };

  const mealOrder = getMealOrder();
  const currentMeal = getCurrentMeal();

  const MealCard = ({ type, data, isFirst }) => {
    const config = mealConfig[type];
    const isActive = currentMeal === type;
    
    return (
      <div className={`mb-6 rounded-3xl overflow-hidden ${isFirst ? 'scale-100' : 'scale-95 opacity-90'} transition-all duration-300`}>
        <div className={`p-0.5 rounded-3xl bg-gradient-to-r ${config.gradient}`}>
          <div className={`bg-gradient-to-br ${config.bg} rounded-3xl overflow-hidden`}>
            <div className="pt-6 pb-4 px-6 text-center relative">
              {isActive && (
                <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-green-500/20 border border-green-500/40 px-2.5 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                  <span className="text-green-400 text-xs font-bold">NOW</span>
                </div>
              )}
              <span className="text-4xl mb-2 block">{config.icon}</span>
              <h3 className={`text-2xl font-black uppercase tracking-widest bg-gradient-to-r ${config.gradient} bg-clip-text text-transparent`}>{type}</h3>
              <p className="text-white/40 text-xs mt-1 tracking-wider">{config.time}</p>
            </div>
            <div className="px-6 pb-4 text-center">
              <div className={`inline-block px-8 py-4 rounded-2xl bg-gradient-to-r ${config.gradient} shadow-lg`}>
                <span className="text-xs text-white/70 uppercase tracking-widest block mb-1">★ Today's Special ★</span>
                <span className="text-xl font-bold text-white">{data.main}</span>
              </div>
            </div>
            <div className="px-6 pb-6 text-center">
              <p className="text-white/30 text-xs uppercase tracking-widest mb-3">— Served With —</p>
              <div className="flex flex-wrap justify-center gap-2">
                {data.sides.map((item, idx) => (
                  <span key={idx} className="bg-white/10 backdrop-blur border border-white/10 text-white/90 px-4 py-2 rounded-full text-sm font-medium">{item}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>
      <div className="relative z-10 pb-28">
        <div className="pt-14 pb-8 px-6 text-center">
          <div className="flex justify-center items-center gap-3 text-white/30 text-xs mb-8">
            <span className="font-mono">{currentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</span>
            <span>•</span>
            <span>{currentTime.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
          </div>
          <p className="text-white/40 text-sm tracking-widest uppercase mb-2">
            {dayOffset === 0 ? "Today" : dayOffset === 1 ? "Tomorrow" : dayOffset === -1 ? "Yesterday" : dayNames[selectedDay]}
          </p>
          <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-violet-500 mb-3">MESS MENU</h1>
          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (<span key={i} className="text-orange-400/60">✦</span>))}
          </div>
        </div>
        {currentMeal && dayOffset === 0 && (
          <div className="mx-6 mb-6 text-center">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-full px-5 py-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-green-400 text-sm font-medium">{currentMeal.charAt(0).toUpperCase() + currentMeal.slice(1)} is being served now</span>
            </div>
          </div>
        )}
        <div className="px-4 pb-8">
          {mealOrder.map((meal, idx) => (<MealCard key={meal} type={meal} data={selectedMenu[meal]} isFirst={idx === 0} />))}
        </div>
        <div className="text-center pb-4">
          <p className="text-white/20 text-xs">Nov - Dec 2025 Menu</p>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 z-20">
        <div className={`flex justify-center transition-all duration-300 ${dayOffset !== 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
          <button onClick={() => setDayOffset(0)} className="mb-3 px-5 py-2.5 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full shadow-lg shadow-orange-500/30 flex items-center gap-2 active:scale-95 transition-transform">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span className="text-white text-sm font-semibold">Back to Today</span>
          </button>
        </div>
        <div className="bg-gradient-to-t from-black via-black/95 to-transparent pt-4 pb-6 px-6">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-2 flex items-center justify-between">
            <button onClick={() => setDayOffset(prev => Math.max(prev - 1, -7))} disabled={dayOffset <= -7} className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all ${dayOffset <= -7 ? 'text-white/20' : 'bg-white/10 text-white hover:bg-white/20 active:scale-95'}`}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button onClick={() => setDayOffset(0)} className="flex-1 mx-2 py-3 rounded-xl text-center transition-all hover:bg-white/5 active:scale-98">
              <p className={`text-lg font-bold ${dayOffset === 0 ? 'text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500' : 'text-white'}`}>{dayNames[selectedDay]}</p>
              <p className="text-white/40 text-xs mt-0.5">{displayDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}{dayOffset === 0 && <span className="ml-1 text-green-400">• Today</span>}</p>
            </button>
            <button onClick={() => setDayOffset(prev => Math.min(prev + 1, 7))} disabled={dayOffset >= 7} className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all ${dayOffset >= 7 ? 'text-white/20' : 'bg-white/10 text-white hover:bg-white/20 active:scale-95'}`}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
