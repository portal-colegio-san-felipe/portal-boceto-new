import { User } from 'lucide-react';
import { teamMembers } from '../data';
import { TeamMember } from '../types';

const departments: { key: TeamMember['department']; label: string }[] = [
  { key: 'directivas', label: 'Directivas' },
  { key: 'profesores', label: 'Profesores' },
  { key: 'secretaria', label: 'Secretaría' },
  { key: 'otros', label: 'Otros' },
];

function MemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="bg-white rounded-2xl p-5 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all duration-200 group hover:-translate-y-1">
      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-200 border-4 border-white shadow">
        <User className="w-9 h-9 text-blue-400" />
      </div>
      <h4 className="font-bold text-gray-900 text-base leading-tight">{member.name}</h4>
      <p className="text-blue-600 text-xs font-semibold uppercase tracking-wide mt-1">{member.role}</p>
      <p className="text-gray-500 text-sm mt-2 leading-relaxed">{member.description}</p>
    </div>
  );
}

export default function MiColegio() {
  return (
    <div>
      <section className="relative bg-blue-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.pexels.com/photos/1164572/pexels-photo-1164572.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-blue-700/60 text-blue-200 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
            Nuestra Institución
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Mi Colegio</h1>
          <div className="w-16 h-1 bg-blue-400 mx-auto rounded" />
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Quiénes Somos</h2>
              <div className="w-10 h-1 bg-blue-600 rounded mb-6" />
              <p className="text-gray-600 leading-relaxed mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip prueba prueba text.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: '62+', desc: 'Años de excelencia', bg: 'bg-blue-50', color: 'text-blue-700' },
                { val: '1,200+', desc: 'Estudiantes activos', bg: 'bg-amber-50', color: 'text-amber-600' },
                { val: '80+', desc: 'Docentes calificados', bg: 'bg-teal-50', color: 'text-teal-600' },
                { val: '100%', desc: 'Compromiso educativo', bg: 'bg-slate-50', color: 'text-slate-700' },
              ].map(({ val, desc, bg, color }) => (
                <div key={desc} className={`${bg} rounded-2xl p-5 text-center`}>
                  <div className={`text-4xl font-bold ${color} mb-1`}>{val}</div>
                  <div className="text-sm text-gray-600">{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-900 text-white rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">Misión</h3>
              <p className="text-blue-100 leading-relaxed text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="bg-white border-2 border-blue-100 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Visión</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Nuestro Equipo</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded mt-3" />
          </div>
          {departments.map(({ key, label }) => {
            const members = teamMembers.filter((m) => m.department === key);
            if (!members.length) return null;
            return (
              <div key={key} className="mb-14">
                <div className="flex items-center gap-3 mb-6">
                  <h3 className="text-2xl font-bold text-gray-800">{label}</h3>
                  <div className="flex-1 h-px bg-gray-200" />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {members.map((m) => <MemberCard key={m.id} member={m} />)}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
