import React from "react";
import Prismic from "prismic-javascript";
import { Tag } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";

import { useWindowDimensions } from "../../../../components/WindowDimensionsProvider";
import { StyledDataSourcesWrapper, StyledDataSources } from "./styles";

const DataSources = () => {
  const { isDesktop } = useWindowDimensions();
  const [sources, setSources] = React.useState([]);
  const [selectedSource, setSelectedSource] = React.useState({});

  React.useEffect(() => {
    const Client = Prismic.client("https://thistothat.cdn.prismic.io/api/v2");

    const fetchData = async () => {
      const response = await Client.query(
        Prismic.Predicates.at("document.type", "data_sources", {})
      );
      if (response) {
        const sources = response.results.map((src) => ({
          id: src.id,
          title: src.data.title[0].text,
          description: src.data.description[0].text,
          tag: src.data.tag[0].text,
          iconSrc: "",
          linkDocs: src.data.link_to_docs.url,
          linkLearn: src.data.link_to_learn_more.url,
        }));

        sources.sort((e1, e2) => (e1.title < e2.title ? -1 : 1));

        setSources(sources);
        setSelectedSource(sources[0]);
      }
    };

    fetchData();
  }, []);

  return (
    <StyledDataSourcesWrapper isDesktop={isDesktop}>
      <StyledDataSources isDesktop={isDesktop}>
        <div className="card">
          <div>
            <div className="title">Data sources</div>
            <div className="sources-list">
              {sources.map(({ id, title }) => (
                <div
                  key={id}
                  className="source-row"
                  onClick={() => {
                    setSelectedSource(sources.find((s) => s.id === id));
                  }}
                >
                  {title}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="card">
          {selectedSource.iconSrc && (
            <img
              src={selectedSource.iconSrc}
              width={50}
              height={50}
              alt={`${selectedSource.title}`}
            />
          )}
          <div>
            <div className="title">{selectedSource.title}</div>
            <div className="description">{selectedSource.description}</div>
          </div>
          <div>
            <div>
              {selectedSource.linkDocs && (
                <a
                  href={selectedSource.linkLearn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View in docs
                </a>
              )}
            </div>
            <div>
              {selectedSource.linkLearn && (
                <a
                  href={selectedSource.linkLearn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn more
                </a>
              )}
            </div>
          </div>
          {selectedSource.tag === "coming soon" && (
            <Tag
              className="status"
              icon={<ClockCircleOutlined />}
              color="orange"
            >
              coming soon
            </Tag>
          )}
        </div>
      </StyledDataSources>
    </StyledDataSourcesWrapper>
  );
};

export default DataSources;
