import React from 'react';
import { shallow } from 'enzyme';
import ExpanseDashbordPage from '../../components/ExpanseDashbordPage';

test('should render ExpenseDashbordPage', () => {
    const wrapper = shallow(<ExpanseDashbordPage />);
    expect(wrapper).toMatchSnapshot();
})