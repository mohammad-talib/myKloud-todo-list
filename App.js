import {View, StatusBar, FlatList,TextInput} from 'react-native';
import React, {useState} from 'react';
import styles from './src/assets/Styles';
import colors from './src/assets/Colors';
import MainHeader from './src/Blocks/MainHeader';
import TodoListItem from './src/Blocks/TodoListItem';
import ItemSeparator from './src/Blocks/ItemSeparator';
import ButtonCircle from './src/Blocks/ButtonCircle';
import {Modal_Block} from './src/Blocks/Modal_Block';

export default function App() {
  const [data, setData] = useState([
    {id: 1, name: 'Eat Cake', priority: 1},
    {id: 2, name: 'Fix Bug', priority: 2},
    {id: 3, name: 'finish Homwork', priority: 3},
  ]);

  const [selectItem, setSelectItem] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  // =============== Start Render Item ================== //
  const renderTodoList = ({item, index}) => {
    return (
      <TodoListItem
        onPress={() => {
          if (selectItem == item) {
            setSelectItem('');
          } else {
            setSelectItem(item);
          }
        }}
        item={item}
        index={index}
        selectItem={selectItem}
      />
    );
  };
  // =============== End Render Item ================== //

  // =============== Start Render Item ================== //
  const _ItemSeparator = () => {
    return <ItemSeparator />;
  };
  // =============== End Render Item ================== //
  return (
    <View style={styles.container}>
      {/* Start Status Bar */}
      <StatusBar backgroundColor={colors.statusBarColor} />
      {/* End Status Bar */}

      {/* Start header */}
      <MainHeader />
      {/* End header */}

      {/* Start List */}
      <FlatList
        data={data}
        renderItem={renderTodoList}
        keyExtractor={_keyExtractor}
        ItemSeparatorComponent={_ItemSeparator}
      />
      {/* End List */}

      {/* Start Delete Float Button */}
      {selectItem ? <ButtonCircle type={1} /> : null}
      {/* End Delete Float Button */}

      {/* Start Add Float Button */}
      <ButtonCircle type={2} />
      {/* End Add Float Button */}

      {/* STart Modal To Add New Todo */}
      <Modal_Block isVisible={isVisible}>
        <Modal_Block.Container>
          {/* start Header */}
          <Modal_Block.Header title={'Add Task'} />
          {/* End Header */}
          {/* Start Body */}
          <Modal_Block.Body>
            <TextInput underlineColorAndroid={"blue"}  />
          </Modal_Block.Body>
          {/* End Body */}
        </Modal_Block.Container>
      </Modal_Block>
      {/* End Modal To Add New Todo */}
    </View>
  );
}

const _keyExtractor = (_, index) => String(index);
