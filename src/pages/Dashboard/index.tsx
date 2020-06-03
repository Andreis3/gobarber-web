import React, { useState } from 'react';

import { FiPower, FiClock } from 'react-icons/fi';
import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Schedule,
  NextAppointment,
  Section,
  Appointment,
  Calendar,
} from './styles';

import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/AuthContext';

const Dashboard: React.FC = () => {
  const [selectedDate, setSelectdate] = useState(new Date());

  const { signOUt, user } = useAuth();
  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />

          <Profile>
            <img src={user.avatar_url} alt={user.name} />

            <div>
              <span>Bem-vindo</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>

          <button type="button" onClick={signOUt}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>
      <Content>
        <Schedule>
          <h1>Hórarios agendados</h1>
          <p>
            <span>Hoje</span>
            <span>Dia 06</span>
            <span>Segunda-feira</span>
          </p>

          <NextAppointment>
            <strong>Atendimento a seguir</strong>
            <div>
              <img
                src="https://avatars0.githubusercontent.com/u/38704247?s=400&u=4aae089250164c3650537a6ebc6e06e2508fab62&v=4"
                alt="Andrei Santos"
              />

              <strong>Andrei Santos</strong>
              <span>
                <FiClock />
                08:00
              </span>
            </div>
          </NextAppointment>

          <Section>
            {/* alterar aqui */}
            <strong>Manhã</strong>

            <Appointment>
              <span>
                <FiClock />
                8:00
              </span>

              <div>
                <img
                  src="https://avatars0.githubusercontent.com/u/38704247?s=400&u=4aae089250164c3650537a6ebc6e06e2508fab62&v=4"
                  alt="Andrei Santos"
                />
                <strong>Andrei Santos</strong>
              </div>
            </Appointment>

            <Appointment>
              <span>
                <FiClock />
                8:00
              </span>

              <div>
                <img
                  src="https://avatars0.githubusercontent.com/u/38704247?s=400&u=4aae089250164c3650537a6ebc6e06e2508fab62&v=4"
                  alt="Andrei Santos"
                />
                <strong>Andrei Santos</strong>
              </div>
            </Appointment>
          </Section>

          <Section>
            {/* alterar aqui */}
            <strong>Tarde</strong>

            <Appointment>
              <span>
                <FiClock />
                8:00
              </span>

              <div>
                <img
                  src="https://avatars0.githubusercontent.com/u/38704247?s=400&u=4aae089250164c3650537a6ebc6e06e2508fab62&v=4"
                  alt="Andrei Santos"
                />
                <strong>Andrei Santos</strong>
              </div>
            </Appointment>

            <Appointment>
              <span>
                <FiClock />
                8:00
              </span>

              <div>
                <img
                  src="https://avatars0.githubusercontent.com/u/38704247?s=400&u=4aae089250164c3650537a6ebc6e06e2508fab62&v=4"
                  alt="Andrei Santos"
                />
                <strong>Andrei Santos</strong>
              </div>
            </Appointment>

            <Appointment>
              <span>
                <FiClock />
                8:00
              </span>

              <div>
                <img
                  src="https://avatars0.githubusercontent.com/u/38704247?s=400&u=4aae089250164c3650537a6ebc6e06e2508fab62&v=4"
                  alt="Andrei Santos"
                />
                <strong>Andrei Santos</strong>
              </div>
            </Appointment>
          </Section>
        </Schedule>
        <Calendar />
      </Content>
    </Container>
  );
};

export default Dashboard;
