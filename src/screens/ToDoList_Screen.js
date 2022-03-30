import {
  View,
  FlatList,
  Text,
  ActivityIndicator,
  ToastAndroid,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from '../../src/assets/Styles';
import colors from '../../src/assets/Colors';
import MainHeader from '../../src/Blocks/MainHeader';
import TodoListItem from '../../src/Blocks/TodoListItem';
import ItemSeparator from '../../src/Blocks/ItemSeparator';
import ButtonCircle from '../../src/Blocks/ButtonCircle';
import {Modal_Block} from '../../src/Blocks/Modal_Block';
import TextInput_Block from '../Blocks/TextInput_Block';
import Priority_Block from '../Blocks/Priority_Block';
import Button_Modal from '../Blocks/Button_Modal';
import {Language} from '../languages/Language';
import {fetchData} from '../assets/api/fetchData';

export default function ToDoList_Screen() {
  // status
  const [data, setData] = useState([
    // {id: 1, name: 'Eat Cake', priority: 1},
    // {id: 2, name: 'Fix Bug', priority: 2},
    // {id: 3, name: 'finish Homwork', priority: 3},
  ]);

  const [priority, setPriority] = useState([
    {id: 1, color: colors.mainColor, priority: 0},
    {id: 2, color: colors.blue, priority: 1},
    {id: 3, color: colors.green, priority: 2},
  ]);
  const [selectPriority, setSelectPriority] = useState('');
  const [selectItem, setSelectItem] = useState('');
  const [task, setTask] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isEdit, setIsEdit] = useState('');

  // start Get Language
  const languages = Language();

  // functions
  useEffect(() => {
    getLists();
  }, []);
  // get List
  async function getLists() {
    const data = await fetchData('lists', 'GET');
    if (data) {
      setData(data);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  }

  // Delete Item Form List
  async function deleteList(id) {
    const data = await fetchData(`lists/${id}`, 'DELETE');
    if (data) {
      getLists();
      setIsLoading(false);
      setSelectItem('');
    } else {
      setIsLoading(false);
    }
  }

  // Add Item To List
  async function AddList() {
    const data = await fetchData(`lists/`, 'POST', {
      name: task,
      priority: selectPriority,
    });
    if (data) {
      getLists();
      setIsVisible(false);
      setSelectPriority('');
      setTask('');
    }
  }

  // Edit Item from List
  async function EditList(id) {
    const data = await fetchData(`lists/${id}`, 'PUT', {
      name: task,
      priority: selectPriority,
    });
    if (data) {
      getLists();
      setIsVisible(false);
      setSelectPriority('');
      setTask('');
    }
    setIsEdit("");
  }

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
        onPressEdit={() => {
          setTask(item.name);
          setSelectPriority(item.priority);
          setIsEdit(item.id);
          setIsVisible(true);
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

  // ================ Start List Empty List ================ //
  const _ListEmptyComponent = () => {
    return (
      <View style={styles.Container_Empty_List}>
        <Text style={styles.Container_Empty_Text}>{languages.NoTask}</Text>
      </View>
    );
  };
console.log('selectPriority', selectPriority)
  return (
    <View style={styles.container}>
      {/* Start header */}
      <MainHeader languages={languages} />
      {/* End header */}

      {/* Start List */}
      {isLoading ? (
        <ActivityIndicator color={colors.mainColor} size={30} />
      ) : (
        <FlatList
          contentContainerStyle={{flex: 1}}
          data={data}
          renderItem={renderTodoList}
          keyExtractor={_keyExtractor}
          ItemSeparatorComponent={_ItemSeparator}
          ListEmptyComponent={_ListEmptyComponent}
        />
      )}
      {/* End List */}

      {/* Start Delete Float Button */}
      {selectItem ? (
        <ButtonCircle
          type={1}
          onPress={() => {
            deleteList(selectItem.id);
          }}
        />
      ) : null}
      {/* End Delete Float Button */}

      {/* Start Add Float Button */}
      <ButtonCircle
        type={2}
        onPress={() => {
          setIsVisible(true);
        }}
      />
      {/* End Add Float Button */}

      {/* STart Modal To Add New Todo */}
      <Modal_Block isVisible={isVisible}>
        <Modal_Block.Container>
          {/* start Header */}
          <Modal_Block.Header title={languages.AddTask} />
          {/* End Header */}
          {/* Start Body */}
          <Modal_Block.Body>
            {/* Start Text Input */}
            <TextInput_Block
              onChangeText={text => {
                setTask(text);
              }}
              value={task}
              placeholder={languages.Title}
            />
            {/* End Text Input */}

            {/* Start Priority Data */}
            <View style={styles.container_body}>
              <View style={styles.Priority_Text_Box}>
                <Text style={styles.Priority_Text}>{languages.Priority}</Text>
              </View>
              <View style={styles.Priority_List}>
                {priority.map((item, index) => {
                  return (
                    <Priority_Block
                      onPress={() => {
                        setSelectPriority(item.priority);
                      }}
                      item={item}
                      key={index}
                      selectPriority={selectPriority}
                    />
                  );
                })}
              </View>
            </View>
            {/* End Priority Data */}
          </Modal_Block.Body>
          {/* End Body */}

          {/* Start Footer */}
          <Modal_Block.Footer>
            <View style={styles.PaddingButton}>
              <Button_Modal
                onPress={() => {
                  setIsVisible(false);
                  setIsEdit("");
                  setTask('')
                  setSelectPriority('')
                }}
                title={languages.Cancel}
                color={'blue'}
              />
            </View>
            <View>
              <Button_Modal
                onPress={() => {
                  if (task && selectPriority>=0) {
                    if (isEdit) {
                      EditList(isEdit);
                    } else {
                      AddList();
                    }
                  } else {
                    ToastAndroid.show(
                      languages.MessageFill,
                      ToastAndroid.SHORT,
                    );
                  }
                }}
                title={isEdit? languages.Edit : languages.Add}
                color={'grayText'}
              />
            </View>
          </Modal_Block.Footer>
          {/* End Footer */}
        </Modal_Block.Container>
      </Modal_Block>
      {/* End Modal To Add New Todo */}
    </View>
  );
}

const _keyExtractor = (_, index) => String(index);
